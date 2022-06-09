import { useRef } from 'react';

import './styles.sass'
const ModalProductForm = ({ showProductForm }) => {
    const previewPhoto = useRef(null);

    const openBrowser = (e) => {
        previewPhoto.current.click();
    };
    return (
        <>
            <div className="modal-product-background" onClick={() => { showProductForm(false) }}></div>
            <div className="modal-product">
                <div className="modal-product-left">
                    <div className="modal-product-left-photo"></div>
                    <div className="modal-product-left-upload">
                        <input type="file" className="modal-product-left-upload-input" ref={previewPhoto} />
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
                        <input type="text" className="modal-product-right-body-description" placeholder="Description" />
                        <input type="text" className="modal-product-right-body-description" placeholder="Categoría" />
                        <input type="text" className="modal-product-right-body-description" placeholder="Unidad" />
                        <input type="text" className="modal-product-right-body-description" placeholder="Stock" />
                        <input type="text" className="modal-product-right-body-description" placeholder="Precio compra" />
                        <input type="text" className="modal-product-right-body-description" placeholder="Precio venta" />
                    </div>
                    <div className="modal-product-right-footer">
                        <div className="modal-product-right-footer-button">
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