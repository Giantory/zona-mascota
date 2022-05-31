const signup = require('../useCases/signup')

const postUser= (async (req, res) => {
  const { body } = req;
  const user = await signup(body);
  return res.status(201).send({ data: { user }, message: 'User registered', status: 'OK' });
});

module.exports = postUser;