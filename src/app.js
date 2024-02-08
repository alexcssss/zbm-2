const express = require('express');
const path = require('path');
const morgan = require('morgan');


const app = express();

// Database
const mysql = require('mysql');
const myConnection = require('express-myconnection');

dbOptions = {
    host: process.env.HOST || '',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '',
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_NAME || 'zbm'
}
app.use(myConnection(mysql, dbOptions, 'single'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use(morgan('dev'));  //Ver que peticiones nos da el cliente por consola

// Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

// Static files
app.use(express.static(path.join(__dirname,'public')));

// Routes
const routes = require('./routes/main');
const auth = require('./routes/auth');
app.use('/', routes);
app.use('/auth/', auth);


// Starting server
app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
});