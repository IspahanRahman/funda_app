

const funda_world_list  = async(req,res)=>{
    try{
        return res.render('pages/funda_world/funda_world_list');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}


module.exports ={
    funda_world_list
}