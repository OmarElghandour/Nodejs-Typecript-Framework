# Use the official Node.js LTS (Long Term Support) image as the base image
FROM node:lts

# Set a working directory inside the container
WORKDIR /app

# Install TypeScript globally
RUN npm install -g typescript



# Create a new user with limited privileges
RUN adduser --disabled-password --gecos "" appuser

# Set the ownership of the application directory to the new user
RUN chown -R appuser:appuser /app

# Switch to the new user
USER appuser


# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire source code to the container
COPY . .

# Build the TypeScript code
RUN tsc

# Start the application with nodemon
CMD ["npm", "run", "start:dev"]
