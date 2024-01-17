const earnings_list = async(req,res)=>{
    try{
        return res.render('pages/earnings/earnings_list');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const asset_list = async (req,res)=>{
    try{
        return res.render('pages/earnings/asset_list');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const add_asset = async (req,res)=>{
    try{
        return res.render('pages/earnings/add_asset');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const bonus_list = async (req,res)=>{
    try{
        return res.render('pages/earnings/bonus_list');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const add_bonus = async (req,res)=>{
    try{
        return res.render('pages/earnings/add_bonus');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const deposit_list = async (req,res)=>{
    try{
        return res.render('pages/earnings/deposit_list');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const add_deposit = async (req,res)=>{
    try{
        return res.render('pages/earnings/add_deposit');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

module.exports={
    asset_list,
    earnings_list,
    add_asset,
    bonus_list,
    add_bonus,
    deposit_list,
    add_deposit
}