const {Schema, model, Types: {ObjectId}} = require('mongoose');


//TODO replace with needed fields in the assignment
const userSchema = new Schema({
    email: {
      type: String,
      required: true,
      unique: true,  
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: [3, 'Username must be at least 3 symbols']
    },
    hashedPassword: {
        type: String,
        required: true,
    }
});

userSchema.index({username: 1}, {
    collation: {
        locale: 'en',
        strength: 2, //case insensitive,
    }
})

userSchema.index({email: 1}, {
    collation: {
        locale: 'en',
        strength: 2, //case insensitive,
    }
})

module.exports = model('User', userSchema);