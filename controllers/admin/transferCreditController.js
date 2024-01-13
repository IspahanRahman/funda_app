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

const transfer_credit_list = async(req,res)=>{
    try{
        return res.render('pages/transfer_credit/transfer_credit_list');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const transfer_accept_list = async (req,res)=>{
    try{
        return res.render('pages/transfer_credit/transfer_accept_list')
    }
    catch(error){
        console.log(error);
    }
}

const transfer_reject_list = async (req,res)=>{
    try{
        return res.render('pages/transfer_credit/transfer_reject_list');
    }
    catch(error){
        console.log(error);
    }
}


module.exports = {
    transfer_credit_list,
    transfer_accept_list,
    transfer_reject_list
}