const alertRoute = require('express').Router();

const { alert_list, alert_create } = require('../../controllers/admin/alertController');
const adminAuth = require('../../middlewares/adminAuthMiddleware');

alertRoute.get('/alert_list',adminAuth,alert_list);
alertRoute.get('/alert_create',adminAuth,alert_create);


module.exports = alertRoute;

