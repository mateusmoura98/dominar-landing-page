FROM node:22-bullseye-slim
RUN apt-get update && apt-get install -y python3 make g++
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
RUN npm install -g serve
CMD ["serve", "-s", "dist/client", "-l", "4173"]73"]
