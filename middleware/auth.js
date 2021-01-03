const jwt = require("jsonwebtoken")

const auth = (req, res, next) =>{
  try{
    const token = req.header('x-auth-token')
    if(!token) return res.status(401).json({message:'No auth token, authorization denied'})

    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET)

    if(!verifiedToken) return res.status(401).json({message:'Auth token verification failed, authorization denied'})

    // req.user = verified
    console.log(verifiedToken)
    req.user = verifiedToken.id
    next()
  }catch(err){
    res.status(500).json({error:err.message})
  }

}

module.exports = auth