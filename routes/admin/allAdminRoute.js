const adminRoute = require('express').Router();

const authRoute = require('./authRoute');
const userRoute = require('./userRoute');
const announcementRoute = require('./announcementRoute');
const chatRoute = require('./chatRoomRoute');
const alertRoute = require('./alertRoute');
const notificationRoute = require('./notificationRoute');
const transferCreditRoute = require('./transferCreditRoute');
const purchaseCreditRoute = require('./purchaseCreditRoute');
const fundaWorldRoute = require('./fundaWorldRoute');
const earningsRoute = require('./earningsRoute');

adminRoute.use(authRoute);
adminRoute.use(userRoute);
adminRoute.use(announcementRoute);
adminRoute.use(chatRoute);
adminRoute.use(alertRoute);
adminRoute.use(notificationRoute);
adminRoute.use(transferCreditRoute);
adminRoute.use(purchaseCreditRoute);
adminRoute.use(fundaWorldRoute);
adminRoute.use(earningsRoute);

module.exports = adminRoute;