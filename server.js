const logger = require('./middleware/logger');
const homepage = require('./routes/homepage');
const express = require('express');
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(logger);

// routes
app.use('/', homepage);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));