import { useRef, useState } from 'react';

import './styles.sass'
const ModalProductForm = ({ showProductForm }) => {
    const [product, setProduct] = useState({});

    const previewPhoto = useRef(null);

    const openBrowser = (e) => {
        previewPhoto.current.click();
    };
    const registerProduct = (e) => {
        e.preventDefault()
        console.log(product)     
        fetch('http://localhost:3001/api/products/registerProduct', {
            method: 'POST',            
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
        .then(res =>{
            return res.json();
        })
        .then(response =>{ console.log(response)})
    }
    return (
        <>
            <div className="modal-product-background" onClick={() => { showProductForm(false) }}></div>
            <div className="modal-product">
                <div className="modal-product-left">
                    <div className="modal-product-left-photo"></div>
                    <div className="modal-product-left-upload">
                        <input type="file" onChange={(e)=>setProduct({...product, photo: e.target.files[0]})} name="image" className="modal-product-left-upload-input" ref={previewPhoto} />
                        <button className="modal-product-left-upload-button" onClick={openBrowser}>
                            <svg className="modal-product-left-upload-button-icon-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
                                <path className="modal-product-left-upload-button-icon-svg-path" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                <path className="modal-product-left-upload-button-icon-svg-path" d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                            </svg>
                            Subir
                        </button>
                    </div>
                </div>
                <div className="modal-product-right">
                    <div className="modal-product-right-header">
                        <h1 className="modal-product-right-header-tittle">Registrar producto</h1>
                    </div>
                    <div className="modal-product-right-separator"></div>
                    <div className="modal-product-right-body">
                        <input type="text" value={product.description} onChange={(e)=>setProduct({...product, description: e.target.value})} name="product[description]" className="modal-product-right-body-description" placeholder="Description" />
                        <input type="text" value={product.category} onChange={(e)=>setProduct({...product, category: e.target.value})} name="product[category]" className="modal-product-right-body-category" placeholder="Categoría" />
                        <input type="text" value={product.unit} onChange={(e)=>setProduct({...product, unit: e.target.value})} name="product[unit]" className="modal-product-right-body-unit" placeholder="Unidad" />
                        <input type="number" value={product.stock} onChange={(e)=>setProduct({...product, stock: e.target.value})} name="product[stock]" className="modal-product-right-body-stock" placeholder="Stock" />
                        <input type="number" value={product.purchasePrice} onChange={(e)=>setProduct({...product, purchasePrice: e.target.value})} name="product[purchasePrice]" className="modal-product-right-body-purchasePrice" placeholder="Precio compra" />
                        <input type="number" value={product.salePrice} onChange={(e)=>setProduct({...product, salePrice: e.target.value})} name="product[salePrice]" className="modal-product-right-body-salePrice" placeholder="Precio venta" />
                    </div>
                    <div className="modal-product-right-footer">
                        <div className="modal-product-right-footer-button" onClick={(e) => { registerProduct(e) }}>
                            <span className="modal-product-right-footer-button-icon">
                                <svg className="modal-product-right-footer-button-icon-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                    <path className="modal-product-right-footer-button-icon-svg-path" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>
                            </span>
                            <p className="modal-product-right-footer-button-text">Listo</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalProductForm