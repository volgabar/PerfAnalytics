import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
//local imports
import routes from './routes';

const app: express.Application = express();
const router: express.Router = express.Router();

app.use(cors());
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            version: '1.0.0',
            title: 'PerfAnalytics API',
            description: 'PerfAnalytics Info',
            contact: {
                name: 'Volga Barış Civelek',
            },
        },
        servers: [
            {
                url: process.env.API_URL || 'http://localhost:3000',
            },
        ],
        basePath: '/api',
    },
    explorer: true,
    apis: ['**/*.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

routes(router);

app.use(router);

// error middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (err) {
        console.error('ERROR: ', err);
        res.status(500).send('Something went wrong!');
    } else {
        next();
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`App listening on port ${process.env.PORT || 3000}!`);
});
