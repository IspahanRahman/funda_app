const apiRoute = require('express').Router();

const userRoute = require('./userRoute');
const announcementRoute = require('./announcementRoute');
const emailRoute = require('./emailRoute');

apiRoute.use(userRoute);
apiRoute.use(announcementRoute);
apiRoute.use(emailRoute);

module.exports = apiRoute;