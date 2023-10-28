# Use an official Node runtime as the parent image
FROM node:18

# Set the working directory in the container

# Copy package.json and package-lock.json to the container
COPY . .
# Install dependencies
RUN npm install
RUN npm run build

# Copy the current directory contents into the container at /app

# Make port 3000 available outside the container
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
