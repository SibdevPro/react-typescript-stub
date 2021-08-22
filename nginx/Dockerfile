FROM node:16.7-alpine AS builder

WORKDIR '/app'

COPY package.json .
COPY yarn.lock .

RUN yarn install
COPY . .
RUN yarn build

FROM nginx

RUN mkdir /nginx

RUN rm -v /etc/nginx/nginx.conf
COPY ./nginx/nginx.conf /etc/nginx/
# COPY ./nginx/ssl/private.key /etc/ssl/private.key
# COPY ./nginx/ssl/site.crt /etc/ssl/site.crt

COPY --from=builder /app/build /nginx/static
