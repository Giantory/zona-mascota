import './styles.sass'

const ModalShopCart = ({ closeModalShopCart }) => {
    return (
        <>
            <div className="modal-background" onClick={() => { closeModalShopCart(false) }}></div>
                <div className="modal-container">
                    <div className="modal-container-header">
                        <h1 className="modal-container-header-tittle">Tu carrito de compras</h1>
                        <div className="modal-container-header-exit"></div>
                    </div>
                    <div className="modal-container-body">
                        <table className="modal-container-body-tbl">
                            <thead className="modal-container-body-tbl-items">
                                <tr>
                                    <th className="modal-container-body-tbl-items-item"></th>
                                    <th className="modal-container-body-tbl-items-item">Producto</th>
                                    <th className="modal-container-body-tbl-items-item">Precio</th>
                                    <th className="modal-container-body-tbl-items-item">Cantidad</th>
                                    <th className="modal-container-body-tbl-items-item">Total</th>
                                    <th className="modal-container-body-tbl-items-item">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="modal-container-body-tbl-product">
                                <tr>
                                    <td className="modal-container-body-tbl-product-image">
                                        <img className="modal-container-body-tbl-product-image-img"
                                            src="https://static.animalear.com/media/9/photos/products/162089/pelota-de-caucho-que-emite-sonidos_1_g.jpeg" />
                                    </td>
                                    <td className="modal-container-body-tbl-product-name">Pelota de hule</td>
                                    <td className="modal-container-body-tbl-product-price">S/ 24.00</td>
                                    <td className="modal-container-body-tbl-product-quantity">1</td>
                                    <td className="modal-container-body-tbl-product-total"> S/ 24.00</td>
                                    <td className="modal-container-body-tbl-product-delete"> x </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-container-footer"></div>
                </div>
            
        </>
    )
}

export default ModalShopCart;