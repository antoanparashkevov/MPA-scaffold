module.exports = () => (req,res,next) =>{
    res.locals.title = 'Default page';
    next();
}