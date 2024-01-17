const fundaStoreRoute = require('express').Router();

const { funda_store_list, membership_list, create_membership, kick_pack_list,create_kick_pack } = require('../../controllers/admin/fundaStoreController');
const adminAuth = require('../../middlewares/adminAuthMiddleware');

fundaStoreRoute.get('/funda_store_list',adminAuth,funda_store_list);
fundaStoreRoute.get('/membership_list',adminAuth,membership_list);
fundaStoreRoute.get('/create_membership',adminAuth,create_membership);
fundaStoreRoute.get('/kick_pack_list',adminAuth,kick_pack_list);
fundaStoreRoute.get('/create_kick_pack',adminAuth,create_kick_pack);


module.exports = fundaStoreRoute;

