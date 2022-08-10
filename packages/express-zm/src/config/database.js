const mongoose = require('mongoose');
 
const mongoUri = process.env.MONGO_URI;

const connectToDb = async () => {
  try {
    const connection = await mongoose.connect(mongoUri);
    console.info(`MongoDb Connected: ${connection.connection.host}`);
    return connection;
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`);
  }
};

module.exports = connectToDb;