const checkout = require('../useCases/checkout')
const updateStock = require('../../product/useCases/updateStock')

const postPayment= (async (req, res) => {
  const { id, amount, products } = req.body;
  console.log(req.body);
  const payment = await checkout(id, amount);
  products.map( async (prd)=>{
    await updateStock(prd.id, prd.qty)
  })
  return res.status(201).send({ data: { payment }, message: 'Pago exitoso', status: 'OK' });
});

module.exports = postPayment;