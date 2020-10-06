FROM node:10.15.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .


RUN chgrp -R 0 /usr/src && \
    chmod -R g=u /usr/src

EXPOSE 1935 8000
CMD ["node","app.js"]
