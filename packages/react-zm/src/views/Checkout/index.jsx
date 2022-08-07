import { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import swal from 'sweetalert';

import "./styles.sass";

function Checkout() {

    const [storedCart, setStoredCart] = useState([]);
    useEffect(() => {
        setStoredCart(JSON.parse(localStorage.getItem("currentCart")));
    }, [])


    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });

        if (!error) {
            console.log(paymentMethod);
            fetch('http://localhost:3001/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: paymentMethod.id,
                    amount: Number(storedCart.reduce((a, b) => Number(a) + Number(b.price * b.qty), 0)) * 100,
                    products: storedCart
                })
            })
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    console.log(res)
                    swal({
                        title: "Transacción exitosa",
                        text: "Tu compra fue realizada correctamente",
                        icon: "success",
                        button: "Aceptar"
                    })
                    elements.getElement(CardElement).clear();
                })
        }
    }
    return (
        <div className="checkout-container">
            <div className="checkout-container-products">
                <div className="checkout-container-products-header">
                    <Link to={"/"}> 
                        <div className="checkout-container-products-header-logo">
                            <img src={Logo} alt="" className="checkout-container-products-header-logo-img" />
                        </div>
                    </Link>
                    <h1 className="checkout-container-products-header-total">
                        Total a pagar: S/. {storedCart.reduce((a, b) => Number(a) + Number(b.price * b.qty), 0)}.00
                    </h1>
                    <p className="checkout-container-products-header-quantity">Cantidad: {storedCart.length}</p>
                </div>
                <div className="checkout-container-products-body">
                    {storedCart.map((prd) => {
                        return <div className="checkout-container-products-body-product">
                            <div className="checkout-container-products-body-product-imagen">
                                <img src={prd.photo} className="checkout-container-products-body-product-imagen-img" />
                            </div>
                            <div className="checkout-container-products-body-product-mid">
                                <p className="checkout-container-products-body-product-mid-description">{prd.description}</p>
                                <p className="checkout-container-products-body-product-mid-info">{prd.category}, {prd.qty}</p>
                            </div>
                            <p className="checkout-container-products-body-product-subtotal"> S/. {prd.qty * prd.price}</p>
                        </div>
                    })}
                </div>
                <div className="checkout-container-products-footer">
                    
                </div>
            </div>
            <div className="checkout-container-form">
                <form className="checkout-container-form-input" onSubmit={handleSubmit}>
                        Datos de la tarjeta: 
                        <CardElement />
                        <button className="checkout-container-form-input-button">
                            Pagar
                        </button>
                </form>
            </div>
        </div>
    )
}

export default Checkout;