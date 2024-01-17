const user_deposit_list = async(req,res)=>{
    try{
        return res.render('pages/deposit/user_deposit_list');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const deposit_accept_list = async (req,res)=>{
    try{
        return res.render('pages/deposit/deposit_accept_list')
    }
    catch(error){
        console.log(error);
    }
}

const deposit_reject_list = async (req,res)=>{
    try{
        return res.render('pages/deposit/deposit_reject_list');
    }
    catch(error){
        console.log(error);
    }
}


module.exports = {
    user_deposit_list,
    deposit_accept_list,
    deposit_reject_list
}