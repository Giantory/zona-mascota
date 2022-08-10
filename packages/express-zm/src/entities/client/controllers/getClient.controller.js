const findClient = require('../useCases/findClient');
const getClient = (async (req, res) => {
    const { id } = req.params;
    try {      
      const client = await findClient(id);
      return res.status(201).send({ data: { client }, status: 'OK' });  
    } catch (error) {
      console.log(error)
    }
  });
  
  

  module.exports = getClient;