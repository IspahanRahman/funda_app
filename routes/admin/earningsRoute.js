const earningsRoute = require('express').Router();

const { asset_list,earnings_list, add_asset,bonus_list,add_bonus,deposit_list,add_deposit } = require('../../controllers/admin/earningsController');
const adminAuth = require('../../middlewares/adminAuthMiddleware');

earningsRoute.get('/earnings_list',earnings_list);
earningsRoute.get('/asset_list',asset_list);
earningsRoute.get('/add_asset',add_asset);
earningsRoute.get('/bonus_list',bonus_list);
earningsRoute.get('/add_bonus',add_bonus);
earningsRoute.get('/deposit_list',deposit_list);
earningsRoute.get('/add_deposit',add_deposit);


module.exports = earningsRoute;

