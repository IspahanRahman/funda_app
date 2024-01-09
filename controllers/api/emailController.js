const conn = require('../../config/database');
const nodemailer = require('nodemailer');

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

const send_email_list = async(req,res)=>{
    try{
        const {user_id} = req.query;
        const emailList = await queryAsync("SELECT * FROM emails WHERE sender_user_id=?",user_id);
        if(emailList.length==0){
            return res.status(404).send({
                status:"fail",
                message:"Sent items empty",
                data:""
            })
        }
        else{
            return res.status(200).send({
                status:"success",
                message:"Sent items exist",
                data:emailList
            })
        }
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const receive_email_list = async(req,res)=>{
    try{
        const {user_id} = req.query;
        const emailList = await queryAsync("SELECT * FROM emails WHERE receiver_user_id=?",user_id);
        if(emailList.length==0){
            return res.status(404).send({
                status:"fail",
                message:"Receive items empty",
                data:""
            })
        }
        else{
            return res.status(200).send({
                status:"success",
                message:"Receive items exist",
                data:emailList
            })
        }
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const send_email = async (req, res) => {
    try{
        const {user_id} = req.query;
        const transporter =nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
        console.log(process.env.EMAIL_USER);
        const { subject, from, to, message,receiver_user_id } = req.body;
        const mailOptions = {
            from,
            to,
            subject,
            text: message,
        };

        transporter.sendMail(mailOptions, async(error, info) => {
            if (error) {
                console.error(error);
                res.status(500).send({
                    status: 'fail',
                    message: "Email Send Failed"
                });
            } else {
                const email = await queryAsync("INSERT INTO emails (sender_user_id,receiver_user_id,from_email,to_email,subject_email,message_email) VALUES(?,?,?,?,?,?)",[user_id,receiver_user_id,from,to,subject,message]);
                if(email){
                    return res.status(200).send({
                        status: 'success',
                        message: 'Email sent successfully'
                    });
                }
                else{
                    return res.status(500).send({
                        status: 'fail',
                        message: 'Somethig went wrong'
                    });
                }
            }
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const email_details = async (req,res)=>{
    try{
        const {email_id}= req.query;
        const email_details = await queryAsync("SELECT * FROM emails WHERE email_id=? ",email_id);
        if(email_details.length==0){
            return res.status(404).send({
                status:"fail",
                message:"Not found",
                data:""
            })
        }
        else{
            return res.status(200).send({
                status:"success",
                message:"Email found",
                data:email_details
            })
        }

    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

module.exports ={
    send_email,
    send_email_list,
    receive_email_list,
    email_details
}