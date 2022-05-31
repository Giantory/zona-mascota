const bcrypt = require('bcrypt');
const crypto = require('crypto');
const mongoose = require('mongoose');

const UserModel = require('../../../models/User.model');
const ClientModel = require('../../../models/Client.model');


const signup = async ({ ...userData }) => {
  const { email, password } = userData;
  const hashedPassword = await hashPassword(password);
  const activationToken = generateToken(16);

  const user = new UserModel({
    email,
    typeUser: userData.typeUser,
    password: hashedPassword,
    isActive: false,
    activationToken,
  });

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
  });
  await session.endSession();

  return user;
};


async function hashPassword(password) {
  return bcrypt.hash(password, 10);
}

function generateToken(length) {
  return crypto.randomBytes(length).toString('hex').substring(0, length);
}

module.exports = signup;