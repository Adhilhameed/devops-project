FROM node:18

WORKDIR /app

# Copy package.json first (better caching)
COPY package*.json ./

RUN npm install

# Copy the rest of backend files
COPY . .

EXPOSE 10000

CMD ["node", "server.js"]