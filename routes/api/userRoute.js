const userRoute = require('express').Router();

const { addUser,profile,profileUpdate,userLogin } = require('../../controllers/api/userController');
const { upload } = require('../../middlewares/uploadMiddleware');

userRoute.post('/addUser',addUser);
userRoute.get('/profile',profile);
userRoute.post('/profileUpdate',upload.single('image'), profileUpdate);
userRoute.post('/userLogin', userLogin);

module.exports = userRoute;