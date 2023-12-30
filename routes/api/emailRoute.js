const emailRoute = require('express').Router();

const { send_email, send_email_list,receive_email_list } = require('../../controllers/api/emailController');

emailRoute.post('/send_email',send_email);
emailRoute.get('/send_email_list',send_email_list);
emailRoute.get('/receive_email_list',receive_email_list);

module.exports = emailRoute;