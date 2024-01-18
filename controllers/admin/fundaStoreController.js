const funda_store_list  = async(req,res)=>{
    try{
        return res.render('pages/funda_store/funda_store_list');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const membership_list  = async(req,res)=>{
    try{
        return res.render('pages/funda_store/membership_list');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const create_membership  = async(req,res)=>{
    try{
        return res.render('pages/funda_store/create_membership');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const kick_pack_list  = async(req,res)=>{
    try{
        return res.render('pages/funda_store/kick_pack_list');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const create_kick_pack  = async(req,res)=>{
    try{
        return res.render('pages/funda_store/create_kick_pack');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const emoji_list  = async(req,res)=>{
    try{
        return res.render('pages/funda_store/emoji_list');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const add_emoji  = async(req,res)=>{
    try{
        return res.render('pages/funda_store/add_emoji');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const personal_add_list  = async(req,res)=>{
    try{
        return res.render('pages/funda_store/personal_add_list');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const create_personal_add  = async(req,res)=>{
    try{
        return res.render('pages/funda_store/create_personal_add');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}


module.exports ={
    funda_store_list,
    membership_list,
    create_membership,
    kick_pack_list,
    create_kick_pack,
    emoji_list,
    add_emoji,
    personal_add_list,
    create_personal_add
    
}