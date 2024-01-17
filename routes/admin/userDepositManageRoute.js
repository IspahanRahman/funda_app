const userDepositManageRoute = require('express').Router();

const {user_deposit_list,deposit_accept_list,deposit_reject_list} = require('../../controllers/admin/userDepositManageController');
const adminAuth = require('../../middlewares/adminAuthMiddleware');

userDepositManageRoute.get('/user_deposit_list',adminAuth,user_deposit_list);
userDepositManageRoute.get('/deposit_accept_list',adminAuth,deposit_accept_list);
userDepositManageRoute.get('/deposit_reject_list',adminAuth,deposit_reject_list);

module.exports = userDepositManageRoute;