const announcementRoute = require('express').Router();

const { announcementsList, addAnnouncement, add_announcement_post, update_announcement, update_announcement_post, delete_announcement } = require('../../controllers/admin/announcementController');
const adminAuth = require('../../middlewares/adminAuthMiddleware');

announcementRoute.get('/announcements',announcementsList);
announcementRoute.get('/add_announcement',addAnnouncement);
announcementRoute.post('/add_announcement_post',add_announcement_post);
announcementRoute.get('/update_announcement',update_announcement);
announcementRoute.post('/update_announcement_post',update_announcement_post);
announcementRoute.get('/delete_announcement',delete_announcement);


module.exports = announcementRoute;