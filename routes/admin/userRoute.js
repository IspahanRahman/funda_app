const userRoute = require('express').Router();

const { userList, profile  } = require('../../controllers/admin/userController');
const adminAuth = require('../../middlewares/adminAuthMiddleware');

userRoute.get('/userList',userList);
userRoute.get('/profile',profile);



module.exports = userRoute;

