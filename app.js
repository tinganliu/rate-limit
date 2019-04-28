const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const morgan = require('./middlewares/morgan');
const responseSender = require('./middlewares/responseSender');
const notFound = require('./middlewares/notFound');
const error = require('./middlewares/error');
const routers = require('./routers');

const app = express();
app.enable('trust proxy');
app.use(cors());
app.use(morgan);
app.use(helmet());
app.use(responseSender);
app.use(routers);
app.use(notFound);
app.use(error);

module.exports = app;
