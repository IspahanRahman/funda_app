const conn = require('../../config/database');
const pagination = require('../../middlewares/pagination');

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
        const assetList = await queryAsyncWithoutValue("SELECT * FROM assets");
        const itemsPerPage = 20;
        const page = parseInt(req.query.page) || 1;
        const { paginatedData, totalPages } = pagination(assetList, page, itemsPerPage);
        return res.render('pages/earnings/asset_list',{
            assets: paginatedData,
            totalPages: totalPages,
            req:req,
            page:page
        });
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

const add_asset_post = async(req,res) =>{
    try{
        const {asset_name,asset_price} = req.body;
        const asset_img = "http://localhost:3010/img/"+req.file.filename;
        const inserted_asset = await queryAsync("INSERT INTO assets (asset_name,asset_image,asset_price) VALUES(?,?,?)",[asset_name,asset_img,asset_price]);
        if(inserted_asset){
            return res.redirect('/admin/asset_list');
        }
        else{
            return res.redirect('/admin/add_asset');
        }
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const update_asset = async (req,res)=>{
    try{
        const {asset_id} = req.query;
        const asset = await queryAsync("SELECT * FROM assets WHERE asset_id=?",asset_id);
        return res.render('pages/earnings/update_asset',{
            asset:asset
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const update_asset_post = async (req,res)=>{
    try{
        const {asset_id,asset_name,asset_price} = req.body;
        
        if(!req.file){
            const asset = await queryAsync("UPDATE assets SET asset_name=?,asset_price=? WHERE asset_id=?",[asset_name,asset_price,asset_id]);
            if(asset){
                return res.redirect('/admin/asset_list');
            }
        }else{
            const imgsrc = "http://localhost:3010/img/"+req.file.filename;
            const q = "UPDATE assets SET asset_name = ?,asset_image=?, asset_price=? WHERE asset_id=?";
            conn.query(q,[asset_name,imgsrc,asset_price,asset_id], (err, result)=>{
                if(err){
                    return res.redirect(`/admin/update_asset?asset_id=${asset_id}`);
                }
                else{
                    return res.redirect('/admin/asset_list');
                }
            })
        }
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
}

const delete_asset= async(req,res)=>{
    const {alert_id} = req.query;
    const q = "DELETE FROM alert WHERE alert_id=?"
    conn.query(q,[alert_id],(err,result) =>{
        if(err) throw err;
        return res.redirect('/admin/alert_list');
    })
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
    add_asset_post,
    update_asset,
    update_asset_post,
    delete_asset,
    bonus_list,
    add_bonus,
    deposit_list,
    add_deposit

}