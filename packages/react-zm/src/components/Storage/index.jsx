import PencilIcon from '../../assets/svg/pencil-square.svg'
import './styles.sass'
const Storage = ({setOpenProductForm}) => {
    return (
        <div className="storage">
            <table className="storage-tbl">
                <thead className="storage-tbl-items">
                    <tr>
                        <th className="storage-tbl-items-item">ID</th>
                        <th className="storage-tbl-items-item">Foto</th>
                        <th className="storage-tbl-items-item">Decripción</th>
                        <th className="storage-tbl-items-item">Categoría</th>
                        <th className="storage-tbl-items-item">Unidad</th>
                        <th className="storage-tbl-items-item">Stock</th>
                        <th className="storage-tbl-items-item">Precio compra</th>
                        <th className="storage-tbl-items-item">Precio venta</th>
                        <th className="storage-tbl-items-item">Estado</th>
                        <th className="storage-tbl-items-item"></th>
                        <th className="storage-tbl-items-item"></th>
                    </tr>
                </thead>
                <tbody className="storage-tbl-product">
                    <tr className="storage-tbl-product-row">
                        <td className="storage-tbl-product-row-id">7895dfs4df56956151322</td>
                        <td className="storage-tbl-product-row-image">
                            <img className="storage-tbl-product-row-image-img"
                                src="https://static.animalear.com/media/9/photos/products/162089/pelota-de-caucho-que-emite-sonidos_1_g.jpeg" />
                        </td>
                        <td className="storage-tbl-product-row-name">Pelota de hule</td>
                        <td className="storage-tbl-product-row-category">Juguete</td>
                        <td className="storage-tbl-product-row-unit">Unidad</td>
                        <td className="storage-tbl-product-row-stock">1</td>
                        <td className="storage-tbl-product-row-pricebuy">S/ 20.00 </td>
                        <td className="storage-tbl-product-row-pricesell"> S/ 24.00 </td>
                        <td className="storage-tbl-product-row-status"> Abastecido </td>
                        <td className="storage-tbl-product-row-button-update">
                            <div className="storage-tbl-product-row-button-update-button">
                                <span className="storage-tbl-product-row-button-update-button-icon">
                                    <svg className="storage-tbl-product-row-button-update-button-icon-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path className="storage-tbl-product-row-button-update-button-icon-svg-path" d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path className="storage-tbl-product-row-button-update-button-icon-svg-path" fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                    </svg>
                                </span>
                                <p className="storage-tbl-product-row-button-update-button-text">Editar</p>
                            </div>
                        </td>
                        <td className="storage-tbl-product-row-button-delete">
                            <div className="storage-tbl-product-row-button-delete-button">
                                <span className="storage-tbl-product-row-button-delete-button-icon">
                                    <svg className="storage-tbl-product-row-button-delete-button-icon-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                                        <path className="storage-tbl-product-row-button-delete-button-icon-svg-path" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                    </svg>
                                </span>
                            </div>
                        </td>
                    </tr>
                    <tr className="storage-tbl-product-row">
                        <td className="storage-tbl-product-row-id">7895dfs4df56956151322</td>
                        <td className="storage-tbl-product-row-image">
                            <img className="storage-tbl-product-row-image-img"
                                src="https://static.animalear.com/media/9/photos/products/162089/pelota-de-caucho-que-emite-sonidos_1_g.jpeg" />
                        </td>
                        <td className="storage-tbl-product-row-name">Pelota de hule</td>
                        <td className="storage-tbl-product-row-category">Juguete</td>
                        <td className="storage-tbl-product-row-unit">Unidad</td>
                        <td className="storage-tbl-product-row-stock">1</td>
                        <td className="storage-tbl-product-row-pricebuy">S/ 20.00 </td>
                        <td className="storage-tbl-product-row-pricesell"> S/ 24.00 </td>
                        <td className="storage-tbl-product-row-status"> Abastecido </td>
                        <td className="storage-tbl-product-row-button-update">
                            <div className="storage-tbl-product-row-button-update-button">
                                <span className="storage-tbl-product-row-button-update-button-icon">
                                    <svg className="storage-tbl-product-row-button-update-button-icon-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path className="storage-tbl-product-row-button-update-button-icon-svg-path" d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path className="storage-tbl-product-row-button-update-button-icon-svg-path" fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                    </svg>
                                </span>
                                <p className="storage-tbl-product-row-button-update-button-text">Editar</p>
                            </div>
                        </td>
                    </tr>
                    <tr className="storage-tbl-product-row">
                        <td className="storage-tbl-product-row-id">7895dfs4df56956151322</td>
                        <td className="storage-tbl-product-row-image">
                            <img className="storage-tbl-product-row-image-img"
                                src="https://static.animalear.com/media/9/photos/products/162089/pelota-de-caucho-que-emite-sonidos_1_g.jpeg" />
                        </td>
                        <td className="storage-tbl-product-row-name">Pelota de hule</td>
                        <td className="storage-tbl-product-row-category">Juguete</td>
                        <td className="storage-tbl-product-row-unit">Unidad</td>
                        <td className="storage-tbl-product-row-stock">1</td>
                        <td className="storage-tbl-product-row-pricebuy">S/ 20.00 </td>
                        <td className="storage-tbl-product-row-pricesell"> S/ 24.00 </td>
                        <td className="storage-tbl-product-row-status"> Abastecido </td>
                        <td className="storage-tbl-product-row-button-update">
                            <div className="storage-tbl-product-row-button-update-button">
                                <span className="storage-tbl-product-row-button-update-button-icon">
                                    <svg className="storage-tbl-product-row-button-update-button-icon-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path className="storage-tbl-product-row-button-update-button-icon-svg-path" d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                        <path className="storage-tbl-product-row-button-update-button-icon-svg-path" fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                    </svg>
                                </span>
                                <p className="storage-tbl-product-row-button-update-button-text">Editar</p>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
export default Storage;