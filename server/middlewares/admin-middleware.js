const adminMinddleware = async (req, res, next) => {
    try {
        console.log(req.user);
        const adminRole = req.user.isAdmin;
        if (!adminRole) {
            return res.status(403).json({ Message: "Access denined. User is not admin." })
        }
        // return res.status(200).json({msg : req.user.isAdmin})
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = adminMinddleware;