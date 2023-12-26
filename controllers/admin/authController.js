const conn = require('../../config/database');

const loginPage = async(req,res) =>{
    try{
        return res.render('pages/login');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}
const login = async (req,res) =>{
    try{
        const {email,password} = req.body; 
        const q= "SELECT *FROM admin WHERE email=?"
        conn.query(q,[email],(err,result)=>{
            if (err){
                throw err;
            }
            else{
                if(password == result[0].password){ 
                    res.cookie('adminToken',result);
                    return res.redirect('/');
                }else{
                    return res.redirect('/admin/login');
                }
            }
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const logout = async(req,res)=>{
    try{
        res.clearCookie('adminToken');
        res.redirect('/admin/login');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const dashboard = async(req,res)=>{
    try{
        return res.render('pages/dashboard');
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}


module.exports = {
    loginPage,
    login,
    logout,
    dashboard
}
