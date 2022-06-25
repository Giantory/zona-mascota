const registerProduct = require('../useCases/registerProduct');
const cloudinary = require('../../../config/cloudinary');

const postProduct = (async (req, res) => {
  try {
    const { body } = req;
    const { url } = await cloudinary.uploader.upload(req.file.path);
    const productdata = {
      ...body,
      photo: url
    };

    const product = await registerProduct(productdata);
    return res.status(201).send({ data: { product }, message: 'Product registered', status: 'OK' });
  } catch (error) {
    console.log(error)
  }
});




module.exports = postProduct;