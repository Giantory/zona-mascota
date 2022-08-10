const { Router } = require('express');

//controllers
const { getClient } = require('./controllers');

const router = Router();

router.get(`/api/client/getClient/:id`, getClient);


module.exports = router;