# ----- builder -----
ARG BASE_IMAGE=node:14.18.0-alpine
ARG BASE_MINIMAL_IMAGE=node:14.18.0-slim

FROM ${BASE_IMAGE} AS builder
WORKDIR /hillel

COPY . .
RUN yarn install
RUN yarn build

# ----- runtime -----
FROM ${BASE_MINIMAL_IMAGE}
MAINTAINER <caxnoigor@gmail.com>

WORKDIR /hillel

ENV NODE_ENV=production
ENV PORT=80

# Copy files from builder image
COPY --from=builder /hillel/packages/server ./packages/server
COPY --from=builder /hillel/package.json ./

RUN yarn install --production

CMD ["npm", "run", "server"]
