# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app files to the container
COPY . .
# migrate db
RUN npx sequelize-cli db:migrate
# Expose port 3000
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]
