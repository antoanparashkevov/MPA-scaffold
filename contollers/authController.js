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
    
        try {
            //TODO change the error handling to correspond to the assignment
            if (formData.password !== formData.repass) {
                throw new Error("The password doesn't match!")
            }
    
            if (!formData.username || !formData.password || !formData.repass || !formData.email) {
                throw new Error("All fields are required!")
            }
    
            //the json web token
            const token = await register(formData.username, formData.email, formData.password);
    
            //set as a cookie our JSON Web Token
            res.cookie('token', token);
    
            res.redirect('/auth/register')//if we don't redirect, it will load the page forever}
        } catch (error) {
            //TODO parse the error obj
            const errors = [error.message]
            //TODO add error display to the actual template from the assignment
            res.render('pages/register', {
                title: 'Register page',
                errors,
                body: {
                    username: formData.username
                }
            })
        }
})

module.exports = router;