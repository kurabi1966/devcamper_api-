// @desc    Log requestes to console
const logger = (req,res,next)=>{
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.url} from ${req.headers['x-forwarded-for'] || req.connection.remoteAddress} at ${req.reqDate}`.yellow);
    next()
}

module.exports = logger
