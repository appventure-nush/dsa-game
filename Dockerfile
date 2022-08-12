FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --only=production
COPY . .

EXPOSE 5000
RUN npm install -g serve
CMD [ "serve", "-s", "build" ]