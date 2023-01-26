# stage1 as builder
FROM node:16-alpine 

WORKDIR /app

# copy the package.json to install dependencies
COPY package.json package-lock.json ./
COPY next.config.js ./next.config.js

# Install the dependencies and make the folder
RUN npm install

# Copy all the folders:
COPY Firebase.ts ./
COPY pages ./pages
COPY context ./context
COPY components ./components

# Copy the extra folders
COPY styles ./styles
COPY types ./Types
COPY asset ./asset
COPY public ./public





# Build the project and copy the files
RUN npm run build


CMD ["npm", "start"]