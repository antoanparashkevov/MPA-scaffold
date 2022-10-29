const router = require('express').Router();

//TODO replace with real controller
router.get('/', (req,res) => {
    res.render('pages/home', {
        title: 'Home page',
    })
})


module.exports = router;