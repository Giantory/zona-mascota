const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const UserModel = require('../../../models/User.model');
const ClientModel = require('../../../models/Client.model');


const signup = async ({ ...userData }) => {
  const { email, password } = userData;
  const hashedPassword = await hashPassword(password);
  const user = new UserModel({
    email,
    typeUser: userData.typeUser,
    password: hashedPassword,
  });
  let token = "";

  const session = await mongoose.startSession();
  await session.withTransaction(async () => {
      if(user.typeUser==="client"){
         const client = new ClientModel({
           userId: user._id,
           name: userData.name,
           surname: userData.surname
         });
       await client.save({ session });       
      }    
    await user.save({ session });
    token = jwt.sign({id: user._id, type: user.typeUser }, process.env.SECRET_TOKEN, {expiresIn: 86400})
  });
  await session.endSession();

  return token;
};


async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}


module.exports = signup;