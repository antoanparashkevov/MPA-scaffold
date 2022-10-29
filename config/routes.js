const homeController = require('../contollers/homeController')

module.exports = (app) => {
    app.use('/', homeController)
}