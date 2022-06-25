require('dotenv').config();

const app = require('./src/app');
const connectToDb = require('./src/config/database');
const PORT = process.env.PORT;

const connectCloudinary = require('./src/config/cloudinary')

connectToDb();


app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});