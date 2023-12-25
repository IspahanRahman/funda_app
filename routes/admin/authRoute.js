const loginRoute = require('express').Router();

const {loginPage,login,logout} = require('../../controllers/admin/authController');
const adminAuth = require('../../middlewares/adminAuthMiddleware');

loginRoute.get('/login',loginPage)
loginRoute.post('/login',login);
loginRoute.get('/logout',logout);


module.exports = loginRoute;

