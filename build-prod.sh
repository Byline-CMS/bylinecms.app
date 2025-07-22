#!/bin/bash

# TODO - test in an automated build environment like Github actions
# and set secret environment variables there
# NOTE: The docker image doesn't currently need the DATABASE_URI
# during Next.js build and SSR generation, but I think this may 
# only be because it's defaulting to the local host for MongoDB
# It will most likely be required in a CI environment like Github 
# actions.
# export PAYLOAD_SECRET=somesecretvale
# export DATABASE_URI=mongodb://foo:bar@192.168.247.113:27017/kept-cms?authSource=admin

# --secret id=payload_secret,env=PAYLOAD_SECRET \
# --secret id=db_connect,env=DATABASE_URI \

# NOTE: 2024-03-24 - we no longer need to pass secrets to the docker build
# thanks to --build-arg DISABLE_DB_CONNECT=true
# which means that Payload will not connect to the database during a build 
# making remote CI / Github Actions easier.
# See the important note only caveat in server.ts for both the CMS and NEXT

params=("$@")

docker build \
  "${params[@]}" \
  --platform=linux/amd64 \
  --network=host \
  --file Dockerfile \
  --tag byline:app .
