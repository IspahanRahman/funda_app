const earningsRoute = require('express').Router();

const { asset_list,earnings_list, add_asset,bonus_list,add_bonus,deposit_list,add_deposit } = require('../../controllers/admin/earningsController');
const adminAuth = require('../../middlewares/adminAuthMiddleware');

earningsRoute.get('/earnings_list',adminAuth,earnings_list);
earningsRoute.get('/asset_list',adminAuth,asset_list);
earningsRoute.get('/add_asset',adminAuth,add_asset);
earningsRoute.get('/bonus_list',adminAuth,bonus_list);
earningsRoute.get('/add_bonus',adminAuth,add_bonus);
earningsRoute.get('/deposit_list',adminAuth,deposit_list);
earningsRoute.get('/add_deposit',adminAuth,add_deposit);


module.exports = earningsRoute;

