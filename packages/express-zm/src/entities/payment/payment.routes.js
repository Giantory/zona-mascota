const { Router } = require('express');


//controllers
const { postPayment } = require('./controllers');

const router = Router();

router.post(`/api/checkout`, postPayment);

module.exports = router;