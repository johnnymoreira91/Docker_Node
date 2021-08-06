FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

LABEL description="node version 1.0"

EXPOSE 3000

CMD npm start
