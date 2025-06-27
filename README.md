# Byline CMS

Welcome to Byline CMS. We're new!

We're hoping to build a developer-friendly, customer-friendly, AI-first headlesss CMS.

<img width="734" alt="byline-screeenshot-03" src="https://github.com/user-attachments/assets/c7d6efa1-71bb-4add-b0a2-34611f17be4c" />

<p style="font-size: 0.8rem;"><em>Tiny steps - the Byline prototype.</em></p>

Here's a no-frills FAQ.

## FAQ

<details>
<summary>1. Why are you doing this?</summary>
The initial maintainers of this project are also users of Payload CMS - which is a great project, with a few caveats and one recent development. One caveat is that as of version 3.0 Payload CMS has become a technically complex project, in particular after its integration with Next.js (we like Next.js, but are not sure about Payload's integration). More importantly, Payload CMS was just acquired by Figma. And so we felt there would be no harm (and maybe even some fun) in exploring an alternative while we try to understand more about what this means for the future of Payload.
</details>

<details>
<summary>2. Who are you?</summary>
Pretty much nobody - at least not within the 'influence sphere'. We're a couple of developers at an agency based in South East Asia - but we're also pretty sure you've never heard of us.
</details>

<details>
<summary>3. Will this work?</summary>
We have no idea.
</details>


<details>
<summary>4. What governance structures are you considering? </summary> 
We really like the governance structure of the [Fastify project](https://github.com/fastify/.github/blob/main/GOVERNANCE.md). We're going to look for advice over the coming days and weeks and try to find a governance structure that reflects our hopes and values.
</details>

<details>
<summary>5. Would you accept sponsorship?</summary>
Yes!
</details>

<details>
<summary>6. Would you accept venture or seed-round investment?</summary>
Probably not. We'd need to understand more, and we're just finding our way. What we feel quite strongly about however, is that community contributions should remain in the community, and not become part of an 'enterprise' or 'pay-walled' solution that the general community no longer has access to.
</details>

<details>
<summary>7. What's here now?</summary>
Not much: The embryo of a 'proof of concept' CMS - but there will be more soon.
</details>

<details>
<summary>8. Will you fork Payload CMS?</summary>
Absolutely not. There would be no point in taking on the complexity of Payload when it's the complexity of the project itself we'd like to avoid. 
</details>

## Design Goals
1. We'd like to create an extensible, plugin-based framework for our headless CMS that will allow users to easily create admin dashboards and serialization frameworks for front-end clients.
   
3. We'd like to offer the option of 'monolith deployments' - combined API / admin dashboard deployments within a front-end framework of choice, or fully isolated API server, admin dashboard web app and API-only consuming front-end client applications.

4. We'd like everything to be fast - like really fast - from admin bundle compile times to API responses.
   
5. We're keen to follow patterns of highly cohesive and loosely coupled design - the benefits of which would include a nice API for content updates and callbacks / webhooks for consumer cache invalidation strategies etc.

6. For now, we'd like to create a 'thin' field API over [Drizzle](https://orm.drizzle.team/).

7. For our admin dashboards, it should be easy to create content editors with your favorite editor, whether [CKEditor](https://ckeditor.com/), [Lexical](https://lexical.dev/), [TipTap](https://tiptap.dev/), [ProseMirror](https://prosemirror.net/) or other.

8. And more....

## What's Next?
We need to find our feet, choose license, publish a roadmap, code of conduct, our values and mission statement, as well as settle on a governance model and likely stewardship entity. We've published the prototype under the [AGPL](https://www.gnu.org/licenses/agpl-3.0.en.html) license - for now, as we understand this has implications. Before we accept contributions, we'll likely switch to a more permissive license like Apache 2.0 (this requires consent or a CLA from contributors, which is fine while there's just a few of us).

## What is there to do?

Here's a list of things that will need to be done, in no particular order:

1. API: A published API specification with client libraries.

1. Field and Form APIs: Assuming we're going to build at least one implementation of an admin dashboard, we'll need APIs for generating admin app field and form UIs from collection definitions (what's here at the moment is a naïve implementation hacked together over a weekend). Think Drupal render arrays or Payload forms.

1. Compositional Block Strategy: As above, we need a strategy for block composition. Blocks are small(er) units of 'Field API' that can be reused, reordered, and specified as part of a collection's field definition.

1. Data Storage: We need a storage strategy. Is [Drizzle](https://orm.drizzle.team/) the quickest way to get 'something' started? 

1. Security: Authentication (AuthN) and authorization (AuthZ) for the above including roles, abilities, admin account user management etc.

1. Accessability (a11y): The admin app (all flavours of the admin app, whether React, Preact, Svelte, Solid or other) needs to be accessible (like really).

1. Localization (i18n): Admin apps need to be localized (interface translations). Collection and field definitions (and therefore by default the API) - need to support localization (content translations).

1. Media: We need a media strategy - generation, storage, serving.

1. AI Native: It would be great if we could build this as AI native - meaning fields, agents, 'assistants' are baked in from the start.

1. Packages and Distribution Strategy: We'll need to extract and prepare packages in the monorepo for distribution.

1. UI Kit: The Byline UI kit is a 'CSS Module / CSS only' UI kit. Some components are rolled from scratch. Others abstract / wrap publicly available components. Several components are based on Radix UI which is a great project. The kit is not complete, and so we should evaluate other sources like [BaseUI](https://base-ui.com/) (which is also excellent), or [React Aria Components](https://react-spectrum.adobe.com/react-aria/components.html) (a superb project). The style system has minimal theme / token definitions. These should be expanded. Docs for the ui kit are Storybook `cd packages/uikit && pnpm storybook` to start the Storybook server.

11. Tests: tests, tests, tests.

Plus lots more... whew!

## Getting Started

At the moment, the project is mostly a prototype and 'weekend hack'. But it builds and runs if you wanted to poke around or follow along.

### 1. Clone, install and build

```sh
# git clone this repo
git clone https://github.com/Byline-CMS/bylinecms.org
cd bylinecms.org
# install deps and build (you must build at least once before you can start the dev server)
pnpm install
pnpm build
```

### 2 Setup your database. 

The prototype currently requires PostgreSQL. There is a docker-compose.yml in the root postgres directory. 

2.1. Create the 'data' subdirectory first, and then start postgres.

```sh 
# From the root of the project
cd postgres
mkdir data
./postgres.sh
```

2.2. Initialize the database and schema.
```sh
# Copy .env.example to .env in the apps/admin directory. Read the notes in .env.example.
cd apps/admin
cp .env.example .env
cd ../../
# The default database password is 'test' (assuming you're using our docker-compose.yml file). From the root again...
cd apps/admin/database && ./db_init
cd ../&& pnpm drizzle:migrate
```

### 3. Start dev mode

Switch back to the root of the project and start the dev environment.

```sh
pnpm dev
```

If you've built the project (above) and have postgres up and running, you should be able to view the prototype on http://localhost:5173/

Enjoy and stay tuned!

## License

Byline CMS is free software licensed under the GNU Affero General Public License v3.0 or later.
For full details, please refer to the [LICENSE](LICENSE) and [COPYRIGHT](COPYRIGHT) files in this repository.

Copyright © 2025 Anthony Bouch and contributors.

### Major Contributors

* Anthony Bouch
* David Lipsky








