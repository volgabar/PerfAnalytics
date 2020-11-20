FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .

# Install app dependencies
RUN yarn install

# Copy app source code
COPY . .

ENV API_URL=https://perf-analytics-app-api.herokuapp.com
ENV FILE_NAME=./dist/perfMetrics.json

RUN yarn run build:prod

CMD ["yarn", "run", "start"]