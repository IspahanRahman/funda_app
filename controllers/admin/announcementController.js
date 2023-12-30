const conn = require('../../config/database');
const pagination = require('../../middlewares/pagination');

// Helper function to wrap db.query in a promise
function queryAsync(query, values) {
    return new Promise((resolve, reject) => {
        conn.query(query, values, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        });
    });
}
  // Helper function to wrap db.query in a promise
function queryAsyncWithoutValue(query) {
    return new Promise((resolve, reject) => {
        conn.query(query, (err, result) => {
        if (err) reject(err);
        else resolve(result);
        });
    });
}


const announcementsList = async(req,res)=>{
    try{
        const announcementsList = await queryAsyncWithoutValue("SELECT * FROM announcements");
        const itemsPerPage = 20;
        const page = parseInt(req.query.page) || 1;
        const { paginatedData, totalPages } = pagination(announcementsList, page, itemsPerPage);
        res.render('pages/announcements/announcementList',{
            announcements: paginatedData,
            totalPages: totalPages,
            req:req,
            page:page
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}


const addAnnouncement = async(req,res)=>{
    try{
        return res.render('pages/announcements/addAnnouncements');
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const add_announcement_post = async(req,res) =>{
    try{
        const {title,description,date} = req.body;
        const inserted_announcement = await queryAsync("INSERT INTO announcements (announcement_title,announcement_description,announcement_date) VALUES(?,?,?)",[title,description,date]);
        if(inserted_announcement){
            return res.redirect('/admin/announcements');
        }
        else{
            return res.redirect('/admin/add_announcement');
        }
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const update_announcement = async (req,res)=>{
    try{
        const {announcement_id} = req.query;
        const announcement = await queryAsync("SELECT * FROM announcements WHERE announcement_id",announcement_id);
        return res.render('pages/announcements/updateAnnouncement',{
            announcement:announcement
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const update_announcement_post = async (req,res)=>{
    try{
        const {announcement_id,title,description,date} = req.body;
        const announcement = await queryAsync("UPDATE announcements SET announcement_title=?,announcement_description=?,announcement_date=? WHERE announcement_id=?",[title,description,date,announcement_id]);
        return res.redirect('/admin/announcements');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const delete_announcement= async(req,res)=>{
    const {announcement_id} = req.query;

    const q = "DELETE FROM announcements WHERE announcement_id=?"
    conn.query(q,[announcement_id],(err,result) =>{
        if(err) throw err;
        return res.redirect('/admin/announcements');
    })
  }

module.exports = {
    announcementsList,
    addAnnouncement,
    add_announcement_post,
    update_announcement,
    update_announcement_post,
    delete_announcement
}