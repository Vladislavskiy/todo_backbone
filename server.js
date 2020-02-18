const path = require('path');
const logger = require('./middleware/logger');
const homepage = require('./routes/homepage');
const express = require('express');
const app = express();
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// webpack hmr
app.use(webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    })
);

app.use(webpackHotMiddleware(compiler));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(logger);

// routes
app.use('/', homepage);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));