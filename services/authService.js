const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = 'keygen';

async function register(username, password) {
    const existingUser = await User.findOne({username}).collation({strength: 2, locale: 'en'})//case-insensitive, english words
  
    if(existingUser) {
        throw new Error('Username is already taken! Try again with different one!')      
    }
    const hashedPassword = bcrypt.hash(password, 10);
    
    const userData = await User.create({
        username,
        hashedPassword,
    })
    
    //TODO see the assignment if after registration to create the user session or not
    
    //returns the jsonwebtoken
    return createSession(userData)
    
}

async function login(username, hashedPassword) {
    
}

//TODO logout action will be located in the controller, not here.

function createSession({_id, username}) {
    //returns the token
    return jwt.sign({
        _id,
        username
    }, JWT_SECRET)
}

function verifySession() {
    
}

module.exports = {
    login,
    register,
    verifySession
}