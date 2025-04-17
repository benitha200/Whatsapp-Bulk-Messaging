# Step 1: Build the Node.js app
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .  
RUN npm run build || echo "No build step"

# Step 2: Run the Node.js app
FROM node:18

WORKDIR /app

COPY --from=build /app .

EXPOSE 3000
CMD ["npm", "start"]
