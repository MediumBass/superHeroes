const express = require('express');
const indexRouter = express.Router();
const heroRouter = require('./hero.router');
const productsRouter = require('./image.router');


indexRouter.use('/hero', heroRouter);
indexRouter.use('/image', productsRouter);

module.exports = indexRouter;