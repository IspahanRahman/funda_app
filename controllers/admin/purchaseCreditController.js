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

const purchase_credit_list = async(req,res)=>{
    try{
        return res.render('pages/purchase_credit/purchase_credit_list');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const purchase_accept_list = async (req,res)=>{
    try{
        return res.render('pages/purchase_credit/purchase_accept_list')
    }
    catch(error){
        console.log(error);
    }
}

const purchase_reject_list = async (req,res)=>{
    try{
        return res.render('pages/purchase_credit/purchase_reject_list');
    }
    catch(error){
        console.log(error);
    }
}


module.exports = {
    purchase_credit_list,
    purchase_accept_list,
    purchase_reject_list
}