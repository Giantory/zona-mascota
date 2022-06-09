const cloudinary = require('cloudinary');

const cloud_name = process.env.cloud_name;
const api_key = process.env.api_key;
const api_secret = process.env.api_secret;

const connectCloudinary = async () => {
    try {
        cloudinary.config({
            cloud_name,
            api_key,
            api_secret
        })
        console.info(`Cloudinary connected!`);
    } catch (error) {
        console.error(`Cloudinary connection error: ${error}`);
    }
}


module.exports = connectCloudinary;


