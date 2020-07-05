FROM node:14-slim

WORKDIR /home/app

COPY ./frontend ./frontend
WORKDIR /home/app/frontend
RUN npm install
RUN npm run build

WORKDIR /home/app
COPY ./server ./server
WORKDIR /home/app/server
RUN npm install

EXPOSE 3000

CMD [ "node", "main.js" ]
