const router = require('express').Router();
const {login, register} = require('../services/authService')

router.get('/register', (req,res) => {
    //TODO replace with actual with as in the assignment
    res.render('pages/register', {
        title: 'Register page'
    })
})

router.post('/register', async (req,res) => {
    const formData = req.body;
    //TODO remove the log
    console.log('formData from the register form >>> ', formData)
    
    //TODO change the error handling to correspond to the assignment
    if(formData.password.trim() !== formData.repass.trim()) {
        throw new Error("The password doesn't match!")
    }
    
    if(!formData.username || !formData.password || !formData.repass) {
        throw new Error("All fields are required!")
    }
    
    //the json web token
    const token = await register(formData.username, formData.password);
    
    //TODO create a cookie with the given token from the AuthService
    
    res.redirect('/auth/register')//if we don't redirect, it will load the page forever
})

module.exports = router;