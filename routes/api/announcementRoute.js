const announcementRoute = require('express').Router();

const { all_announcement } = require('../../controllers/api/announcementController');

announcementRoute.get('/all_announcement',all_announcement);

module.exports = announcementRoute;