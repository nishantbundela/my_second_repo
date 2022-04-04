FROM node:latest

WORKDIR /backend

COPY package.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npm run build

COPY . .

EXPOSE 8000

CMD ["npm", "start"]