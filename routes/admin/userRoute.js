const userRoute = require('express').Router();

const { userList, profile } = require('../../controllers/admin/userController');
const adminAuth = require('../../middlewares/adminAuthMiddleware');

userRoute.get('/userList',adminAuth,userList);
userRoute.get('/profile',adminAuth,profile);



module.exports = userRoute;

