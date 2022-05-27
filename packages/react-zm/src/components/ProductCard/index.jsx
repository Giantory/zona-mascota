import { useState, useContext } from 'react';
import { ProductCounterContext } from '../../views/PetShop';

import './styles.sass'
const ProductCard = () => {
    const [cartCounter, setCartCounter] = useState(0);
    const { productCounter, setProductCounter } = useContext(ProductCounterContext);
    
    return (
        <div className='card'>
            <div className='card-img'></div>
            <div className='card-info'>
                <p className='card-info-title'>Product title </p>
                <p className='card-info-body'>Product description and details</p>
            </div>
            <div className='card-footer'>
                <span className='card-footer-price'>$499.49</span>
                <div className="card-footer-buttons">
                    <div className="card-footer-buttons-less" onClick={() => { setCartCounter(cartCounter - 1) }}>-</div>
                    <div className="card-footer-buttons-counter">{cartCounter}</div>
                    <div className="card-footer-buttons-add" onClick={() => { setCartCounter(cartCounter + 1) }}>+</div>
                </div>
            </div></div>
    )
}

export default ProductCard;