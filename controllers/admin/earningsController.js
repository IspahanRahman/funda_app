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

module.exports={
    asset_list,
    earnings_list,
    add_asset
}