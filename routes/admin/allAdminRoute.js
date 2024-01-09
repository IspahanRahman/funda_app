const adminRoute = require('express').Router();

const authRoute = require('./authRoute');
const userRoute = require('./userRoute');
const announcementRoute = require('./announcementRoute');
const chatRoute = require('./chatRoomRoute');

adminRoute.use(authRoute);
adminRoute.use(userRoute);
adminRoute.use(announcementRoute);
adminRoute.use(chatRoute);

module.exports = adminRoute;