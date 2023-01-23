FROM node:16-alpine AS builder
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
RUN apk update

# Set working directory
WORKDIR /base-mqtt
RUN npm i -g pnpm
RUN npm i -g turbo
COPY . .
RUN pnpm turbo prune --scope=@deur/base-mqtt --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:16-alpine AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
RUN npm i -g pnpm
RUN npm i -g turbo
WORKDIR /base-mqtt

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /base-mqtt/out/json/ .
COPY --from=builder /base-mqtt/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /base-mqtt/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
RUN pnpm install

# Build the project
COPY --from=builder /base-mqtt/out/full/ .
COPY turbo.json turbo.json
RUN pnpm build:base:cloud
 
FROM node:16-alpine AS runner
RUN npm i -g pnpm
RUN npm i -g turbo
WORKDIR /base-mqtt
 
# # Don't run production as root
# RUN addgroup --system --gid 1001 cloud
# RUN adduser --system --uid 1001 cloud
# USER cloud
 
# COPY --from=installer /base-mqtt/apps/web/next.config.js .
COPY --from=installer /base-mqtt .
#  List all the files in the directory
RUN ls -la
#  List all the files in the basedirectory
CMD node apps/base-mqtt/dist/index.js