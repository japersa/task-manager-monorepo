FROM node:14-alpine

WORKDIR /app

COPY package.json ./

RUN yarn install --production

COPY . .

EXPOSE 3002

CMD ["node", "server.js"]
