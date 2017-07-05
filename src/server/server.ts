import * as bodyParser from 'body-parser';
import * as express from 'express';

import { Application } from 'express';
import { apiScan } from './routes/apiScan';

const mongoose = require('mongoose');



const port = 3000 || process.env.PORT;
const env = process.env.NODE_ENV || 'development';
if (env == 'development') {
    process.env.MONGODB_URI = 'mongodb://localhost:27017/IMSI';
} else if (env === 'test') {
    process.env.MONGODB_URI = 'mongodb://localhost:27017/IMSI';
}

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

const app: Application = express();

apiScan(app);

app.listen(port, ()=> {
    console.log(`Server running on port ${port}`);
});