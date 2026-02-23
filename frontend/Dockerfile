# Build stage
FROM node:18-alpine

WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the source code
COPY . .

# Expose the dev server port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]