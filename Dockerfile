# Use an official Node runtime as a parent image
FROM node:18.4.0-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app files to the container
COPY . .

# Expose port 3000
EXPOSE 3001

# Start the app
CMD ["sh", "-c", "npm start && npx sequelize-cli db:migrate"]
