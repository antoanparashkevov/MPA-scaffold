const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');

//Import Middlewares
const titleMiddleware = require('../middlewares/title');


module.exports = (app) => {
    const hbs = handlebars.create({
        extname: '.hbs'
    })
    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');
    
    //Embedded Middlewares
    app.use('/static', express.static('static'));
    app.use(express.urlencoded({extended: true}));
    app.use(cookieParser());
    
    //Application Middlewares
    app.use(titleMiddleware('Default page'))
}