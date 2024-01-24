const alertRoute = require('express').Router();

const { alert_list, alert_create,alert_create_post,update_alert_post,update_alert,delete_alert } = require('../../controllers/admin/alertController');
const adminAuth = require('../../middlewares/adminAuthMiddleware');

alertRoute.get('/alert_list',alert_list);
alertRoute.get('/alert_create',alert_create);
alertRoute.post('/alert_create_post',alert_create_post);
alertRoute.get('/update_alert',update_alert);
alertRoute.post('/update_alert_post',update_alert_post);
alertRoute.get('/delete_alert',delete_alert);

module.exports = alertRoute;

