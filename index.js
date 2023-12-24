const express = require('express');
const app = express();
const path = require('path')
const apiRoute = require('./routes/api/allApiRoutes');
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api',apiRoute);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

const PORT = 3010
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))