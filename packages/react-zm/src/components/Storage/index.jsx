import PencilIcon from '../../assets/svg/pencil-square.svg'
import { useState, useEffect } from "react";
import './styles.sass'
const Storage = ({setOpenProductForm}) => {

    const [products, setProducts] = useState([])//list of products

    useEffect(() => {
        fetch('https://zona-mascota-backend.herokuapp.com/api/products/findAllProducts', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => {
                return res.json();
            })
            .then(response => {
                setProducts(response.data.products)
            })
    }, [])

    return (
        <div className="storage">
            <div className="storage-header">
                <div className="storage-header-item">ID</div>
                <div className="storage-header-item">Foto</div>
                <div className="storage-header-item">Descripción</div>
                <div className="storage-header-item">Categoría</div>
                <div className="storage-header-item">Unidad</div>
                <div className="storage-header-item">Stock</div>
                <div className="storage-header-item">Precio compra</div>
                <div className="storage-header-item">Precio venta</div>
                <div className="storage-header-item">Estado</div>
                <div className="storage-header-item"></div>
            </div>
            <div className="storage-body">
            {products.map((product) => {
                return <div className="storage-body-product">
                    <div className="storage-body-product-id">{product._id}</div>
                    <div className="storage-body-product-photo">
                        <img src={product.photo} className="storage-body-product-photo-img" />
                    </div>
                    <div className="storage-body-product-description">{product.description}</div>
                    <div className="storage-body-product-category">{product.category}</div>
                    <div className="storage-body-product-unit">{product.unit}</div>
                    <div className="storage-body-product-stock">{product.stock}</div>
                    <div className="storage-body-product-purchasePrice">{product.purchasePrice}</div>
                    <div className="storage-body-product-salePrice">{product.salePrice}</div>
                    <div className="storage-body-product-status">abastecido</div>                    
                </div>
            })}

            </div>            
        </div>
    )
}
export default Storage;