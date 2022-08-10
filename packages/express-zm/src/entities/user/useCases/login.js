const jwt = require("jsonwebtoken");

const UserModel = require('../../../models/User.model');

const login = async (email, password) => {
    const user = await UserModel.findOne({ email: email });
    console.log(user);
    if(!user){
        throw new Error("Invalid email or password")
    }else{
        const matchPassword = await user.verifyPassword(password);
        if(!matchPassword){
            throw new Error("Invalid email or password")
        } else {
            const token = jwt.sign({id: user._id, type: user.typeUser }, process.env.SECRET_TOKEN, {expiresIn: 86400})
            return token;
        }
    }
}
module.exports = login;