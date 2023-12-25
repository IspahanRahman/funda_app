const conn = require('../config/database');

const adminAuth = async(req,res,next) =>{
    const adminToken = req.cookies.adminToken;
    if(!adminToken) return res.redirect('/admin/login'); 
    try{
        const q = 'SELECT *FROM admin WHERE id=?';
        conn.query(q,adminToken[0].id,(error,response)=>{
            if(adminToken[0].email == response[0].email && adminToken[0].password == response[0].password){
                return next();
            }
            else{
                res.clearCookis('adminToken');
                res.redirect('/admin/login');
            }
        })
    }catch(error){
        console.log(error);
        return res.redirect('/admin/login');
    }

}

module.exports = adminAuth;