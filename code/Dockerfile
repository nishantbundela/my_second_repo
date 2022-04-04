FROM node:latest

RUN npm install -g serve

WORKDIR /code

COPY /frontend/package.json .

RUN npm install

COPY ./frontend .

RUN npm run-script build

EXPOSE 3000

CMD ["npm", "start"]