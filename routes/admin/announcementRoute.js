const announcementRoute = require('express').Router();

const { announcementsList, addAnnouncement, add_announcement_post, update_announcement, update_announcement_post, delete_announcement } = require('../../controllers/admin/announcementController');
const adminAuth = require('../../middlewares/adminAuthMiddleware');

announcementRoute.get('/announcements',adminAuth,announcementsList);
announcementRoute.get('/add_announcement',adminAuth,addAnnouncement);
announcementRoute.post('/add_announcement_post',adminAuth,add_announcement_post);
announcementRoute.get('/update_announcement',adminAuth,update_announcement);
announcementRoute.post('/update_announcement_post',adminAuth,update_announcement_post);
announcementRoute.get('/delete_announcement',adminAuth,delete_announcement);


module.exports = announcementRoute;