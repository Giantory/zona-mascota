const login = require('../useCases/login')
const { verify } = require('jsonwebtoken');

const loginController = (async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await login(email, password);
        req.decoded = verify(token, process.env.SECRET_TOKEN);
        return res.status(201).send({ success: true, data: req.decoded, meta:{ token }, message: 'User logged', status: 'OK' });
    } catch (error) {
        return res.status(401).send({ success: false, message: error.message })
    }

});

module.exports = loginController;