const { query } = require('express');
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


const transfer_credit = async(req,res)=>{
    try{
        const {username,amount,pin} = req.body;
        const user_info = await queryAsync("SELECT * FROM users WHERE username=?", username);
        if(user_info.length==0){
            return res.status(500).send({
                status:"fail",
                message:"Transfer credit failed",
                data:''
            })
        }
        else{
            if(user_info[0].balance>=amount){
                const new_balance =parseFloat(result[0][balance_transfer_type])-parseFloat(totalAmount);
          const q = `UPDATE users SET ${balance_transfer_type}=? WHERE user_id=?`
          conn.query(q,[new_balance,user_id],(err,balanceUpdateResult)=>{
            if(err) throw err;
            const q = "INSERT INTO withdraw_request (user_id, balance_type_id , withdraw_amount,withdraw_fee, payment_method_id,account_number,status) VALUES(?,?,?,?,?,?,?)"
                conn.query(q,[user_id, balance_type_id, withdraw_amount, withdraw_fee,payment_method_id,account_number,status])
                res.send({
                  status: "success",
                  message: "withdraw data is insert successfull and amount withdraw successfull",
                  data:{}
                });

          });
            }
            else{
                return res.status(500).send({
                status:"fail",
                message:"Not sufficient credit to transfer",
                data:''
            })
            }
        }
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}


module.exports={
    transfer_credit
}