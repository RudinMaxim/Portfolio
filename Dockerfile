## Install dependencies only when needed
#FROM node:18-alpine AS deps
## Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
#RUN apk add --no-cache libc6-compat
#WORKDIR /app
#COPY package.json ./
#RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:18.19.0-alpine3.19

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install --legacy-peer-deps

# Copying source files
COPY . /usr/src/app
COPY ./.env.example /usr/src/app/.env

ENV NODE_ENV production
ENV PORT 3000

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD ["npm", "run", "start"]