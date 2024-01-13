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

const notification_list = async(req,res)=>{
    try{
        return res.render('pages/notification/notification_list');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const notification_create= async(req,res)=>{
    try{
        return res.render("pages/notification/notification_create");
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}


module.exports ={
    notification_list,
    notification_create
}