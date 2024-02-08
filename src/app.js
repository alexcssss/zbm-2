const express = require('express');
const path = require('path');
const morgan = require('morgan');


const app = express();

// Database
const mysql = require('mysql');
const myConnection = require('express-myconnection');

dbOptions = {
    host: 'bjgexpgoqeoua8pnvews-mysql.services.clever-cloud.com',
    user: 'u6q3d9qh1wu3kz25',
    password: 'JPBxFjs8R9TvTF24LV9Z',
    port: "3306",
    database: 'bjgexpgoqeoua8pnvews'
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