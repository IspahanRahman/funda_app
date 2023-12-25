const adminRoute = require('express').Router();

const authRoute = require('./authRoute');

adminRoute.use(authRoute);

module.exports = adminRoute;