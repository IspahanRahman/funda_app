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


const addUser = async (req, res) => {
    try{
        const {username, email,gender,country, password, referer_code } = req.body;

        var pattern = /^[a-zA-Z][a-zA-Z0-9_\-\.]{5,}$/;
        var value = pattern.test(username);
    
        if(value){
            const q = "SELECT *FROM users WHERE username = ?";
            conn.query(q,[username],async (err,result0)=>{
            if(Object.keys(result0).length == 0){
                if (referer_code == "") {
                    const insertQuery = "INSERT INTO users(username, email, gender, country, password, referer_code)VALUES(?,?,?,?,?,?)";
                    const values = [username,email,gender, country,password,"1234"];
                    const userInfo = await queryAsync(insertQuery, values);
                    if (userInfo) {
                        const q = "SELECT LAST_INSERT_ID() as id";
                        const user = await queryAsyncWithoutValue(q);
                        const user_id = user[0].id;
                        const refer_code = 1000 + user_id;
                        const q1 = "UPDATE users SET refer_code=? WHERE user_id=?";
                        conn.query(q1, [refer_code, user_id], (err, result) => {
                            if (err) {
                                return res.status(409).send({
                                    status: "fail",
                                    message: "There is some issue.",
                                    data: {}
                                });
                            }
                            else{
                                const q = "SELECT * FROM users WHERE user_id = ?";
                                conn.query(q,[user_id],(err,resultUser)=>{
                                    if(err) {
                                        return res.status(409).send({
                                            status: "fail",
                                            message: "There is some issue.",
                                            data: {}
                                        });
                                    }
                                    else{
                                        res.send({
                                            status: "success",
                                            message: "",
                                            data: resultUser[0]
                                        });
                                    }
                                })
                            }
                        });
                    } 
                    else {
                        return res.status(409).send({
                            status: "fail",
                            message: "There is some issue.",
                            data: {}
                        });
                    }
                }
                else{
                    const q = "SELECT *FROM users WHERE refer_code=?"
                    conn.query(q,[referer_code],(err,result)=>{
                        if(err) {
                            return res.status(409).send({
                                status: "fail",
                                message: "There is some issue.",
                                data: {}
                            });
                        }
                        else{
                            if(Object.keys(result).length == 0){
                                return res.status(409).send({
                                    status: "fail",
                                    message: "Referer code Not Found",
                                    data: {}
                                });
                            }
                            else{
                                const insertData = "INSERT INTO users(username, email, gender, country, password, referer_code)VALUES(?,?,?,?,?,?)"
                                conn.query(insertData, [username,email,gender, country,password, referer_code], (err, result) => {
                                    if (err) throw err
                                    const q = "SELECT *FROM users WHERE username = ?";
                                    conn.query(q,[username],(err, user) =>{
                                        if(err) throw err;
                                        const user_id = user[0].user_id;
                                        const refer_code = 1000+user_id;
                                        const q = "UPDATE users SET refer_code=? WHERE user_id=?";
                                        conn.query(q,[refer_code,user_id],(err,refer_result)=>{
                                            if(err) throw err;
                                                const q = "SELECT *FROM users WHERE user_id = ?";
                                                conn.query(q,[user_id],(err,resultUser)=>{
                                                    if(err) throw err;
                                                    res.send({
                                                            status: "success",
                                                            message: "",
                                                            data: resultUser[0]
                                                    });
                                                })
                                            })
                                        })
                                    })
                                }
                            }
                        }) 
                }
                }else{
                    res.status(409).send({
                        status: "fail",
                        message: "Username already exists. Try another username",
                        data: {}
                    });
                }
            })
        }else{
            res.status(500).send({
                status: "fail",
                message: "Username is invalid",
                data: {}
            });
        }
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}


const profile = async (req,res) =>{
    try{
        const {user_id} = req.query;
        const q = "SELECT *FROM users WHERE user_id = ?"
        conn.query(q,[user_id],(err, profile)=>{
            const q = "SELECT * FROM users WHERE users.user_id = ?"
            conn.query(q, [user_id], (err, user) =>{
                //if(err) throw err
                if(err){
                    return res.status(409).send({
                        status: "fail",
                        message: "There is some issue.",
                        data: {}
                    });
                } else{
                        res.send({
                            status: "success",
                            message: "",
                            data: user[0]
                    });
                    
                }
            })
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const profileUpdate = async (req, res) =>{
    try{
        const {user_id} = req.query;
        const {name, email, date_of_birth, short_bio, relationship, gender, mobile} = req.body
        if(!req.file){
            const q = "UPDATE users SET name = ?, email=?,date_of_birth=?,short_bio=?, relationship=?, gender=?, mobile=? WHERE user_id=?";
            conn.query(q,[name, email, date_of_birth, short_bio, relationship, gender, mobile,user_id], (err, result)=>{
                if(err) {
                    return res.status(409).send({
                        status: "fail",
                        message: "There is some issue.",
                        data: {}
                    });
                }
                else{
                    return res.send({
                        status: "success",
                        message: "Profile Updated Successfully",
                        data: {}
                    });
                }
            })
        }else{
            const imgsrc = 'http://localhost:3010/image/' + req.file.filename
            const q = "UPDATE users SET name = ?, email=?,date_of_birth=?,short_bio=?, relationship=?, gender=?, mobile=?, image=? WHERE user_id=?";
            conn.query(q,[name, email, date_of_birth, short_bio, relationship, gender, mobile,imgsrc,user_id], (err, result)=>{
                if(err) {
                    return res.status(409).send({
                        status: "fail",
                        message: "There is some issue.",
                        data: {}
                    });
                }
                else{
                    return res.send({
                        status: "success",
                        message: "Profile Updated Successfully",
                        data: {}
                    });
                }
            })
        }
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}


const userLogin = async (req,res) =>{
    try{
        const { username, password } = req.body;
        const q = "SELECT * FROM users WHERE username = ? AND password = ?";
        conn.query(q, [username, password], (err, user) => {
            if(err){
                return res.status(409).send({
                    status:"fail",
                    message:"There is some issue",
                    data:{}
                })
            }
            else{
                if(Object.keys(user).length == 0){
                    res.status(408).send({
                        status: "fail",
                        message: "Wrong username Or password",
                        data: {}
                    });
                }else{
                    const q = "SELECT * FROM users WHERE users.user_id = ?";
                    conn.query(q, [user[0].user_id], (err, userDetails) =>{
                        if(err){
                            res.status(409).send({
                                status: "fail",
                                message: "There is some issue.",
                                data: {}
                            });
                        } 
                        else{
                            res.send({
                                status: "success",
                                message: "",
                                data: userDetails[0]
                            });
                            
                        }
                    })
                }
            }
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}


const get_Account = async(req,res)=>{
    try{
        const {user_id}=req.query;
        const account = await queryAsync("SELECT * FROM users WHERE user_id=?",user_id);
        if(account.length==0){
            return res.status(404).send({
                status:'fail',
                message:'Not Found',
                data:''
            })
        }
        else{
            return res.status(200).send({
                status:'success',
                message:"",
                data:account[0].balance
            })
        }
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}


// const user_logout = async (req,res)=>{
//     try{

//     }catch(error){
//         console.log(error);
//         return res.status(500).json({message:"Internal Server Error"});
//     }
// }

module.exports = {
    addUser,
    profile,
    profileUpdate,
    userLogin,
    get_Account
}

