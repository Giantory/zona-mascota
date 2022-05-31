const { mongoose } = require('mongoose')
const ProductModel = require('../../../models/Product.model')

const registerProduct = async (body) => {
    const product = new ProductModel(body)

    const session = await mongoose.startSession();
    await session.withTransaction(async () => {
        await product.save({ session });

    });
    await session.endSession();
    return product;
}

module.exports = registerProduct;