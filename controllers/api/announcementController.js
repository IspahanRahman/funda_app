const conn = require('../../config/database');

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


const all_announcement = async(req,res)=>{
    try{
        const now = new Date();
        const currentDate = now.toISOString().slice(0,19);
        const formatDate =(date)=>{
            return date.toISOString().slice(0,19);
        }
        const newDate = new Date(now);
        newDate.setDate(newDate.getDate()-7);
        const targetDate = formatDate(newDate);
        const announcement = await queryAsync("SELECT * FROM announcements WHERE announcement_date BETWEEN ? AND ?",[targetDate,currentDate]);
        if(announcement.length > 0) {
            return res.status(200).send({
                status:"success",
                message:"Announcements Found",
                data:announcement
            })
        }
        else{
            return res.status(404).send({
                status:"fail",
                message:"Announcement not Found",
                data:""
            })
        }
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

module.exports = {
    all_announcement
}