const mongoose = require('mongoose');

//TODO replace with the database name from the assignment
const CONNECTION_STRING = 'mongodb://localhost:27017/scaffold'

module.exports = async () => {
    try {
        await mongoose.connect(CONNECTION_STRING, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log('Database connected')
    } catch (err) {
        console.error(err.message);
        process.exit(1)
    }
}