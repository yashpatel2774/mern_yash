const jwt = require('jsonwebtoken');
const User = require('../models/user-model')

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({Message: "Unauthorized HTTP, Token not provided.."})
    }

    console.log("Token from auth middleware", token);

    const jwtToken = token.replace('Bearer', "").trim();

    console.log("Token from auth middleware", jwtToken);

    try {

        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET)
        console.log(isVerified);

        const userData = await User.findOne({email: isVerified.email}).select({password: 0,});
        console.log(userData);

        req.user = userData;
        req.token = token;
        req.userID = userData._id;    
        next();
    }catch (error) {

    }


}

module.exports = authMiddleware;