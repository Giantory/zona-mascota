const Stripe = require('stripe');
const stripe = new Stripe(process.env.API_MP_SECRET_KEY)

const checkout = async (id, amount) =>{
    const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD",
        description: "",
        payment_method: id,
        confirm: true
    }); 
}

module.exports = checkout