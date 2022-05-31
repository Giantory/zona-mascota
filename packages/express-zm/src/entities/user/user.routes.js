const { Router } = require('express');

//controllers
const { postUser } = require('./controllers');

const router = Router();

router.post(`/api/user/signup`, postUser);

module.exports = router;