FROM node:18-alpine3.16 AS dependencies
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

ENV NODE_ENV=production


FROM node:18-alpine3.16 AS application
EXPOSE 80
WORKDIR /usr/src/app
COPY --from=dependencies /usr/src/app .

COPY . .