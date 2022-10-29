const homeController = require('../contollers/homeController');
const authController = require('../contollers/authController');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    
}