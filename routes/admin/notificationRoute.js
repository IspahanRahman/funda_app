const notificationRoute = require('express').Router();

const { notification_list, notification_create } = require('../../controllers/admin/notificationController');
const adminAuth = require('../../middlewares/adminAuthMiddleware');

notificationRoute.get('/notification_list',adminAuth,notification_list);
notificationRoute.get('/notification_create',adminAuth,notification_create);



module.exports = notificationRoute;

