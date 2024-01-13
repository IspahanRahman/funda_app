const earningsRoute = require('express').Router();

const { asset_list,earnings_list, add_asset } = require('../../controllers/admin/earningsController');
const adminAuth = require('../../middlewares/adminAuthMiddleware');

earningsRoute.get('/earnings_list',adminAuth,earnings_list);
earningsRoute.get('/asset_list',adminAuth,asset_list);
earningsRoute.get('/add_asset',adminAuth,add_asset);


module.exports = earningsRoute;

