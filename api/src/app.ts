import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
//local imports
import routes from './routes';

dotenv.config();

const app: express.Application = express();
const router: express.Router = express.Router();

app.use(cors());
// parse application/json
app.use(bodyParser.json());

// error middleware
app.use((err: unknown, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (err) {
        console.error(err);
        res.status(500).send('Something went wrong!');
    } else {
        next();
    }
});

routes(router);

app.use(router);

app.listen(process.env.PORT || 3000, () => {
    console.log(`App listening on port ${process.env.PORT || 3000}!`);
});
