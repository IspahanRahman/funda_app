const fundaWolrdRoute = require('express').Router();

const { funda_world_list } = require('../../controllers/admin/fundaWorldController');
const adminAuth = require('../../middlewares/adminAuthMiddleware');

fundaWolrdRoute.get('/funda_world_list',adminAuth,funda_world_list);


module.exports = fundaWolrdRoute;

