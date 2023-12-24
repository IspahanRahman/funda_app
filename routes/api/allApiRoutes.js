const apiRoute = require('express').Router();

const userRoute = require('./userRoute');

apiRoute.use(userRoute);

module.exports = apiRoute;