const mongoose = require('mongoose');



const MONGO_URI = `mongodb+srv://gespinoa:sa123456@api-rest.m28peac.mongodb.net/?retryWrites=true&w=majority`

const connectToDb = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URI);
    console.info(`MongoDb Connected: ${connection.connection.host}`);
    return connection;
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`);
  }
};

module.exports = connectToDb;