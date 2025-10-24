# Use the official Node.js Alpine base image
FROM node:lts-alpine AS base

# PNPM ENVs
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# See: https://github.com/nodejs/corepack/issues/612
ENV COREPACK_INTEGRITY_KEYS=0

WORKDIR /app

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# deps
# Add node deps
FROM base AS deps

WORKDIR /app

COPY apps/webapp/package.json ./apps/webapp/package.json

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./

RUN corepack enable pnpm && pnpm install --frozen-lockfile

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# production-deps
# Setup production node_modules
FROM base AS production-deps

WORKDIR /app

# NOTE: prune is not currently supported recursively.
# https://pnpm.io/cli/prune - prune is not currently supported recursively.
# COPY --from=deps /app/apps/webapp/node_modules /app/apps/webapp/node_modules

# RUN pnpm prune --prod

COPY apps/webapp/package.json ./apps/webapp/package.json

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./

# RUN pnpm install --prod;
RUN corepack enable pnpm && pnpm install --prod --frozen-lockfile

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# build
# Build the app
FROM base AS build

WORKDIR /app


COPY --from=deps /app/apps/webapp/node_modules /app/apps/webapp/node_modules
COPY --from=deps /app/node_modules /app/node_modules

# Copy source code for the project (manually excluding _docker)
COPY apps/webapp apps/webapp
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./

# RUN --mount=type=secret,id=payload_secret PAYLOAD_SECRET=$(cat /run/secrets/payload_secret) \
# --mount=type=secret,id=db_connect DATABASE_URI=$(cat /run/secrets/db_connect) \
RUN corepack enable pnpm && pnpm add --global rimraf && pnpm run build

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# final
#
# Rebuild the source code only when needed
# This may be the case that you would try
# to build the app based on some `X_TAG` in my case (Git commit hash)
# but the code hasn't changed.
FROM base

LABEL io.infonomic.name="byline_app" \
      io.infonomic.maintainer="Anthony Bouch <anthony@infonomic.io>" \
      io.infonomic.description="Byline webapp app container."

ENV NODE_ENV=production
ENV PATH="/root/.local/share/pnpm/global/5/node_modules/.bin:$PATH"

RUN corepack enable pnpm && pnpm add --global serve

RUN set -eux; \
  mkdir -p /app; \
  mkdir -p /app/node_modules/.cache; \
  mkdir -p /app/apps/webapp; \

WORKDIR /app

COPY --from=production-deps /app/node_modules /app/node_modules

# main app
COPY --from=production-deps /app/apps/webapp/node_modules /app/apps/webapp/node_modules
COPY --from=build /app/apps/webapp/dist /app/apps/webapp/dist
COPY --from=build /app/apps/webapp/public /app/apps/webapp/public
  
# Root package.json and files
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/pnpm-lock.yaml /app/pnpm-lock.yaml
COPY --from=build /app/pnpm-workspace.yaml /app/pnpm-workspace.yaml
COPY --from=build /app/turbo.json /app/turbo.json

EXPOSE 3000

CMD [ "serve", "-s", "apps/webapp/dist", "-l", "3000" ]
