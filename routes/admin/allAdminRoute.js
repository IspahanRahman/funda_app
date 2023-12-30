const adminRoute = require('express').Router();

const authRoute = require('./authRoute');
const userRoute = require('./userRoute');
const announcementRoute = require('./announcementRoute');

adminRoute.use(authRoute);
adminRoute.use(userRoute);
adminRoute.use(announcementRoute);

module.exports = adminRoute;