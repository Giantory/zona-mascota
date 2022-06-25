const findAllProducts = require('../useCases/findAllProducts');
const getProducts = (async (req, res) => {
    try {      
      const products = await findAllProducts();
      return res.status(201).send({ data: { products }, status: 'OK' });  
    } catch (error) {
      console.log(error)
    }
  });
  
  
  
  
  module.exports = getProducts;