const { Router } = require('express');

//controllers
const { postUser, loginController } = require('./controllers');

const router = Router();

router.post(`/api/user/signup`, postUser);
router.post(`/api/user/login`, loginController);

module.exports = router;