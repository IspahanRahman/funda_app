const transferCreditRoute = require('express').Router();

const {transfer_accept_list,transfer_credit_list,transfer_reject_list} = require('../../controllers/admin/transferCreditController');
const adminAuth = require('../../middlewares/adminAuthMiddleware');

transferCreditRoute.get('/transfer_credit_list',transfer_credit_list);
transferCreditRoute.get('/transfer_accept_list',transfer_accept_list);
transferCreditRoute.get('/transfer_reject_list',transfer_reject_list);

module.exports = transferCreditRoute;