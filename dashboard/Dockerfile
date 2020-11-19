# STAGE 1 - React build stage
FROM node:alpine AS builder

WORKDIR /usr/src/app

COPY package.json .

# Install app dependencies
RUN yarn install

# Copy app source code
COPY . .

RUN yarn run build


# STAGE 2 - build the final image and copy the react build files
FROM nginx:alpine

# Copy react build files
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf
# Copy our config
COPY config/nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]
