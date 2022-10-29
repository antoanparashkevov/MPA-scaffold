function parseError(error) {
    //error.message is just a string, we parse it to the array 
    return error.message.split('\n')
}

module.exports = {
    parseError
}