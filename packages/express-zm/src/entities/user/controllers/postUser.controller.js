const signup = require('../useCases/signup')

const postUser = (async (req, res) => {
  try {
    const { body } = req;
    const token = await signup(body);
    return res.status(201).send({ success: true, data: token, message: 'User registered', status: 'OK' });
  } catch (error) {
    return res.status(401).send({ success: false, message: error.message })
  }
});

module.exports = postUser;