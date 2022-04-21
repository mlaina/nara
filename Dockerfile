FROM node:13-alpine

WORKDIR /usr/src/nara

COPY package*.json ./

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers make python && \
  npm install --quiet node-gyp -g &&\
  npm install --quiet && \
  apk del native-deps

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]