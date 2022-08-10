import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.sass'



const ModalShopCart = ({ closeModalShopCart }) => {
    const [storedCart, setStoredCart] = useState([]);
    useEffect(() => {
        setStoredCart(JSON.parse(localStorage.getItem("currentCart")));
    }, [])

    return (
        <>
            <div className="modal-background" onClick={() => { closeModalShopCart(false) }}></div>
            <div className="modal-container">
                <div className="modal-container-header">
                    <h1 className="modal-container-header-tittle">Tu carrito de compras</h1>
                    <div className="modal-container-header-exit"></div>
                </div>
                <div className="modal-container-body">
                    {storedCart === null ?
                        <div className="modal-container-body-message">
                            <h1 className="modal-container-body-message-text"> No tienes productos aún </h1>
                            <span className="modal-container-body-message-icon">
                                <svg className="modal-container-body-message-icon-svg" viewBox="0 0 16 16">
                                    <path className="modal-container-body-message-icon-svg-path" d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z" />
                                    <path className="modal-container-body-message-icon-svg-path" d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                </svg>
                            </span>
                        </div>
                        : <div className="modal-container-body-grid">
                            <div className="modal-container-body-grid-header">
                                <h1 className="modal-container-body-grid-header-item"></h1>
                                <h1 className="modal-container-body-grid-header-item">Producto</h1>
                                <h1 className="modal-container-body-grid-header-item">Precio</h1>
                                <h1 className="modal-container-body-grid-header-item">Cantidad</h1>
                                <h1 className="modal-container-body-grid-header-item">Total</h1>
                                <h1 className="modal-container-body-grid-header-item">Acciones</h1>
                            </div>
                            <div className="modal-container-body-grid-body">
                                {storedCart.map((prd) => {
                                    return <div className="modal-container-body-grid-body-product">
                                        <div className="modal-container-body-grid-body-product-image">
                                            <img className="modal-container-body-grid-body-product-image-img"
                                                src={prd.photo} />
                                        </div>
                                        <div className="modal-container-body-grid-body-product-name">{prd.description}</div>
                                        <div className="modal-container-body-grid-body-product-price">{prd.price}</div>
                                        <div className="modal-container-body-grid-body-product-quantity">{prd.qty}</div>
                                        <div className="modal-container-body-grid-body-product-total">{prd.qty * prd.price}</div>
                                        <div className="modal-container-body-grid-body-product-delete"> x </div>
                                    </div>
                                })}
                            </div>
                        </div>}
                </div>
                {storedCart === null ? "" :
                    <div className="modal-container-footer">
                        <h1 className="modal-container-footer-total">
                            Total: {storedCart.reduce((a, b) => Number(a) + Number(b.price * b.qty), 0)}
                        </h1>
                        <div className="modal-container-footer-buttons">
                            <Link to={"/checkout"}>
                            <button className="modal-container-footer-buttons-checkout">Pagar</button>
                            </Link>
                        </div>
                    </div>}
            </div>
        </>
    )
}

export default ModalShopCart;