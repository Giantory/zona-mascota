import Storage from "../../components/Storage";
import ModalProductForm from "../../components/ModalProductForm";
import {useState} from "react";

import './styles.sass'
function Products() {

    const [openProductForm, setOpenProductForm] = useState(false);
    return (
        <div className="admin-products">
            <div className="admin-products-container">
                <div className="admin-products-container-button" onClick={()=>{setOpenProductForm(true)}}>
                    <span className="admin-products-container-button-icon">
                        <svg className="admin-products-container-button-icon-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                            <path className="admin-products-container-button-icon-svg-path" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                        </svg>
                    </span>
                    <p className="admin-products-container-button-text">Producto</p>
                </div>
                <Storage showProductForm={setOpenProductForm}/>
                {openProductForm && <ModalProductForm showProductForm={setOpenProductForm}/>}
            </div>

        </div>
    )
}
export default Products;