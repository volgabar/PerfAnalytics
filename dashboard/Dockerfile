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

ADD ./config/nginx.conf /etc/nginx/conf.d/default.template

CMD sh -c "envsubst \"`env | awk -F = '{printf \" \\\\$%s\", $1}'`\" < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"