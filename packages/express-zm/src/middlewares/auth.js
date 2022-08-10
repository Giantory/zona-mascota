const jwt = require("jsonwebtoken");

const UserModel = require("../models/User.model")


exports.verifyToken = async (req, res, next) => {
    const token = req.headers["token"];

    if(!token) return res.status(401).json({message: 'Unauthorized'})

    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);

    const user = await UserModel.findById(decoded.id); 
    if (!user) return res.status(401).json({message: 'Unauthorized'})

    next();
}