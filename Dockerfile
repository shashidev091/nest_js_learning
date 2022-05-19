FROM node:16-alpine

RUN apk update

WORKDIR /app/node_app

COPY . .

RUN ls

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]