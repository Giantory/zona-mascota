const { Router } = require('express');

//controllers
const { postProduct } = require('./controllers');

const router = Router();

router.post(`/api/products/registerProduct`, postProduct);

module.exports = router;