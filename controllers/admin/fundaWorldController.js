

const funda_world_list  = async(req,res)=>{
    try{
        return res.render('pages/funda_world/funda_world_list');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}


const add_funda_star  = async(req,res)=>{
    try{
        return res.render('pages/funda_world/add_funda_star');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const funda_star_list  = async(req,res)=>{
    try{
        return res.render('pages/funda_world/funda_star_list');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}


module.exports ={
    funda_world_list,
    funda_star_list,
    add_funda_star
}