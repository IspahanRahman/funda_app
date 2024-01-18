const chatRoute = require('express').Router();

const { chat_room, chat_room_create } = require('../../controllers/admin/chatController');
const adminAuth = require('../../middlewares/adminAuthMiddleware');

chatRoute.get('/chat_room',chat_room);
chatRoute.get('/chat_room_create',chat_room_create);


module.exports = chatRoute;

