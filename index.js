require("dotenv").config();
const express = require('express');
const app = express();
const path = require('path')
const apiRoute = require('./routes/api/allApiRoutes');
const adminRoute = require('./routes/admin/allAdminRoute');
const adminAuth = require('./middlewares/adminAuthMiddleware');
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api',apiRoute);
app.use('/admin',adminRoute);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/',adminAuth,async(req,res)=>{
    try{
        res.render('pages/index');
    }catch(error){
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"});
    }
})

const PORT = 3010
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))