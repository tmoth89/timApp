# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the application's dependencies
RUN npm install

# Copy the application's files to the container
COPY hello.js ./

# Expose port 3000 to the outside world
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
