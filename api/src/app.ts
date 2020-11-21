import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
//local imports
import routes from './routes';
import ApplicationError from './errors/application-error';

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
app.use((err: ApplicationError, req: Request, res: Response, next: NextFunction) => {  
    if (res.headersSent) {
        return next(err);
    }
    
    return res.status(err.status || 500).json({
      error: process.env.NODE_ENV === 'development' ? err : undefined,
      message: err.message
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`App listening on port ${process.env.PORT || 3000}!`);
});
