FROM node:20-alpine

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install

COPY . /app

RUN npx prisma migrate deploy

RUN npx prisma generate

CMD ["npm", "run", "dev"]

