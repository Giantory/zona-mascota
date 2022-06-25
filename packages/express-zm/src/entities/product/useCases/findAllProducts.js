const { mongoose } = require('mongoose')
const ProductModel = require('../../../models/Product.model')

const findAllProducts = async () => {
    let products = [];
    const session = await mongoose.startSession();
    await session.withTransaction(async () => {
        products = await ProductModel.find().exec();
    });
    await session.endSession();
    return products;
}

module.exports = findAllProducts;