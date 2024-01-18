const fundaStoreRoute = require('express').Router();

const { funda_store_list, membership_list, create_membership, kick_pack_list,create_kick_pack, emoji_list, add_emoji, personal_add_list, create_personal_add } = require('../../controllers/admin/fundaStoreController');
const adminAuth = require('../../middlewares/adminAuthMiddleware');

fundaStoreRoute.get('/funda_store_list',funda_store_list);
fundaStoreRoute.get('/membership_list',membership_list);
fundaStoreRoute.get('/create_membership',create_membership);
fundaStoreRoute.get('/kick_pack_list',kick_pack_list);
fundaStoreRoute.get('/create_kick_pack',create_kick_pack);
fundaStoreRoute.get('/emoji_list',emoji_list);
fundaStoreRoute.get('/add_emoji',add_emoji);
fundaStoreRoute.get('/personal_add_list',personal_add_list);
fundaStoreRoute.get('/create_personal_add',create_personal_add);


module.exports = fundaStoreRoute;

