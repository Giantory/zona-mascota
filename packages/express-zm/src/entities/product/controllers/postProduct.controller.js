const registerProduct  = require('../useCases/registerProduct')

const postProduct = (async (req, res) => {
  const { body } = req;
  console.log(req.file);
  const product = await registerProduct(body);
  return res.status(201).send({ data: { product }, message: 'Product registered', status: 'OK' });
});

module.exports = postProduct;