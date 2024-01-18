const notificationRoute = require('express').Router();

const { notification_list, notification_create } = require('../../controllers/admin/notificationController');
const adminAuth = require('../../middlewares/adminAuthMiddleware');

notificationRoute.get('/notification_list',notification_list);
notificationRoute.get('/notification_create',notification_create);



module.exports = notificationRoute;

