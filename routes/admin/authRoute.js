const loginRoute = require('express').Router();

const {loginPage, login, logout, dashboard} = require('../../controllers/admin/authController');
const adminAuth = require('../../middlewares/adminAuthMiddleware');

loginRoute.get('/login',loginPage)
loginRoute.post('/login',login);
loginRoute.get('/logout',logout);
loginRoute.get('/dashboard',adminAuth,dashboard);


module.exports = loginRoute;

