FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .

# Install app dependencies
RUN yarn install

# Copy app source code
COPY . .

RUN yarn run build:prod

CMD ["yarn", "run", "start"]