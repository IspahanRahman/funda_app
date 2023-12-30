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

const userList = async(req,res)=>{
    try{
        const users = await queryAsyncWithoutValue("SELECT * FROM users ORDER BY user_id DESC");
        return res.render('pages/users/usersList',{
            users:users
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const profile = async (req,res)=>{
    try{
        const {user_id} = req.query;
        const user = await queryAsync("SELECT * FROM users WHERE user_id =?",user_id);
        return res.render('pages/users/profile', {
            user:user
        })
    }
    catch(error){
        console.log(error);
    }
}


module.exports = {
    userList,
    profile
}