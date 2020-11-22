# PerfAnalytics

PerfAnalytics is an ecosystem which collects and criticizes web performance data.

### Tech

PerfAnalytics uses a number of open source projects to work properly:

- [React] - A JavaScript library for building user interfaces
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app
- [Swagger] - Swagger UI allows anyone to visualize and interact with the API’s resources without having any of the implementation logic in place.
- [Typescript] - TypeScript extends JavaScript by adding types.

### Installation

PerfAnalytics requires [Yarn](https://yarnpkg.com/) to run.

Install the dependencies and start the backend.

```sh
$ cd api
$ yarn install
$ yarn build:dev
$ yarn start
```

For frotend...

```sh
$ cd dashboard
$ yarn install
$ yarn start
```

### Docker

PerfAnalytics is very easy to install and deploy in a Docker container.

```sh
docker-compose build
docker-compose up
```

Once done, run the Docker image and map the port to whatever you wish on your host.

For frontend:

```sh
127.0.0.1:80
```

For backend:

```sh
127.0.0.1:8080
```

### Production

Swagger Open Api:
https://perf-analytics-app-api.herokuapp.com/api-docs/

Frontend:
https://perf-analytics-app-dashboard.herokuapp.com/

[react]: https://reactjs.org/
[node.js]: http://nodejs.org
[swagger]: https://swagger.io/
[typescript]: https://www.typescriptlang.org/
[express]: http://expressjs.com
