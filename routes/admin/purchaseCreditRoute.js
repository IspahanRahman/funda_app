const purchaseCreditRoute = require('express').Router();

const {purchase_accept_list,purchase_credit_list,purchase_reject_list} = require('../../controllers/admin/purchaseCreditController');
const adminAuth = require('../../middlewares/adminAuthMiddleware');

purchaseCreditRoute.get('/purchase_credit_list',adminAuth,purchase_credit_list);
purchaseCreditRoute.get('/purchase_accept_list',adminAuth,purchase_accept_list);
purchaseCreditRoute.get('/purchase_reject_list',adminAuth,purchase_reject_list);

module.exports = purchaseCreditRoute;