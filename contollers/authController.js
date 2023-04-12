const router = require('express').Router();
const {login, register} = require('../services/authService')
const {parseError} = require("../util/parser");
const { isGuest } = require("../middlewares/guards");
const { body, validationResult } = require("express-validator");
const { isLength } = require("validator");

router.get('/register', isGuest(), (req,res) => {
    //TODO replace with actual with as in the assignment
    res.render('pages/register', {
        title: 'Register page'
    })
})

router.post('/register', 
    isGuest(),
    body('email')
        .isLength({min: 5})
        .withMessage('Email must be at least 5 characters long!')
        .isAlphanumeric()
        .withMessage('Email must contain only letters and digits!'),
    body('username')
        .isLength({min: 5})
        .withMessage('Username must be at least 5 characters long!')
        .isAlphanumeric()
        .withMessage('Username must contain only letters and digits!'),
    body('password')
        .isLength({min: 5})
        .withMessage('Username must be at least 5 characters long!')
        .isAlphanumeric()
        .withMessage('Password must contain only letters and digits!'),
    async (req,res) => {
        const formData = req.body;
        //TODO remove the log
        console.log('formData from the register form >>> ', formData)
    
        try {
            const { errors } = validationResult(req);
            
            if( errors.length > 0 ) {
                throw errors;
            } 
            
            //TODO change the error handling to correspond to the assignment
            if (formData.password !== formData.repass) {
                throw new Error("The password doesn't match!")
            }
            
            //the json web token
            //TODO see the assignment if the registration will create the user session
            const token = await register(formData.username, formData.email, formData.password);
    
            //set as a cookie our JSON Web Token
            res.cookie('token', token);
    
            res.redirect('/')//if we don't redirect, it will load the page forever}
        } catch (error) {
            const errors = parseError(error);
            
            //TODO add error display to the actual template from the assignment
            res.render('pages/register', {
                title: 'Register page',
                errors,
                body: {
                    email: formData.email,
                    username: formData.username
                }
            })
        }
})

router.get('/login', isGuest(), (req,res) => {
    //TODO replace with actual with as in the assignment
    res.render('pages/login', {
        title: 'Login page'
    })
})

router.post('/login', isGuest(), async (req,res) => {
    const formData = req.body;
    //TODO remove the log
    console.log('formData from the login form >>> ', formData)

    try {
        //TODO change the error handling to correspond to the assignment

        if (!formData.username || !formData.password || !formData.email) {
            throw new Error("All fields are required!")
        }
        
        //the json web token
        const token = await login(formData.username, formData.email, formData.password);

        //set as a cookie our JSON Web Token
        res.cookie('token', token);

        //TODO replace with the redirect from the assignment
        res.redirect('/')//if we don't redirect, it will load the page forever}
    } catch (error) {
        const errors = parseError(error);

        //TODO add error display to the actual template from the assignment
        res.render('pages/login', {
            title: 'Login page',
            errors,
            body: {
                email: formData.email,
                username: formData.username
            }
        })
    }
})

router.get('/logout', (req,res) => {
    res.clearCookie('token')
    res.redirect('/')
})

module.exports = router;