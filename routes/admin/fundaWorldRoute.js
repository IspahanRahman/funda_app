const fundaWolrdRoute = require('express').Router();

const { funda_world_list, funda_star_list, add_funda_star } = require('../../controllers/admin/fundaWorldController');
const adminAuth = require('../../middlewares/adminAuthMiddleware');

fundaWolrdRoute.get('/funda_world_list',adminAuth,funda_world_list);
fundaWolrdRoute.get('/funda_star_list',adminAuth,funda_star_list);
fundaWolrdRoute.get('/add_funda_star',adminAuth,add_funda_star);



module.exports = fundaWolrdRoute;

