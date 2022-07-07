FROM node:14-alpine

WORKDIR /app/src

COPY package*.json ./

COPY prisma ./prisma/

COPY .env ./

COPY tsconfig.json ./

COPY . ./

RUN npm install

RUN npx prisma generate

EXPOSE 3000

CMD [ "npm", "start" ]