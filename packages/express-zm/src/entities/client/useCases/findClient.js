const { mongoose } = require('mongoose')
const ClientModel = require('../../../models/Client.model')

const findClient = async (id) => {
    let client = null;
    const session = await mongoose.startSession();
    await session.withTransaction(async () => {
        client = await ClientModel.findOne({userId: id});
    });
    await session.endSession();
    return client;
}

module.exports = findClient;