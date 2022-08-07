const { mongoose } = require('mongoose')
const ProductModel = require('../../../models/Product.model')

const updateStock = async (id, qty) => {
    const session = await mongoose.startSession();
    await session.withTransaction(async () => {
        const product = await ProductModel.findById(id);
        console.log(product);
        await ProductModel.updateOne({_id: id}, {stock: product.stock-qty}, { session })
    });
    await session.endSession();
}

module.exports = updateStock;