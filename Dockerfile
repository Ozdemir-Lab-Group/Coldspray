# stage1 as builder
FROM node:16-alpine as build

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
COPY types ./types
COPY asset ./asset
COPY public ./public
COPY nginx ./nginx





# Build the project and copy the files
RUN npm run build


FROM nginx:1.23.3-alpine
COPY --from= sudo build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80



CMD ["nginx", "-g", "daemon off;"]