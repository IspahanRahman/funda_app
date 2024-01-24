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

const alert_list = async(req,res)=>{
    try{
        const alertList = await queryAsyncWithoutValue("SELECT * FROM alert");
        const itemsPerPage = 20;
        const page = parseInt(req.query.page) || 1;
        const { paginatedData, totalPages } = pagination(alertList, page, itemsPerPage);
        return res.render('pages/alert/alert_list',{
            alerts: paginatedData,
            totalPages: totalPages,
            req:req,
            page:page
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const alert_create= async(req,res)=>{
    try{
        return res.render("pages/alert/alert_create");
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}


const alert_create_post = async(req,res) =>{
    try{
        const {alert_title,alert_description} = req.body;
        const inserted_alert = await queryAsync("INSERT INTO alert (alert_title,alert_description) VALUES(?,?)",[alert_title,alert_description]);
        if(inserted_alert){
            return res.redirect('/admin/alert_list');
        }
        else{
            return res.redirect('/admin/alert_create');
        }
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const update_alert = async (req,res)=>{
    try{
        const {alert_id} = req.query;
        const alert = await queryAsync("SELECT * FROM alert WHERE alert_id=?",alert_id);
        console.log("This is the alert",alert);
        return res.render('pages/alert/update_alert',{
            alert:alert
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const update_alert_post = async (req,res)=>{
    try{
        const {alert_id,alert_title,alert_description} = req.body;
        const alert = await queryAsync("UPDATE alert SET alert_title=?,alert_description=? WHERE alert_id=?",[alert_title,alert_description,alert_id]);
        return res.redirect('/admin/alert_list');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const delete_alert= async(req,res)=>{
    const {alert_id} = req.query;
    const q = "DELETE FROM alert WHERE alert_id=?"
    conn.query(q,[alert_id],(err,result) =>{
        if(err) throw err;
        return res.redirect('/admin/alert_list');
    })
  }


module.exports ={
    alert_list,
    alert_create,
    alert_create_post,
    update_alert,
    update_alert_post,
    delete_alert
}