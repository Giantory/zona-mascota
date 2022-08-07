import { useState, useContext, useEffect } from 'react';
import { CartShopContext } from '../../views/PetShop';
import { ProductCounterContext } from '../../views/PetShop';


import './styles.sass'
const ProductCard = ({ product }) => {
    const [cartCounter, setCartCounter] = useState(0);
    const { cartShopList, setCartShopList } = useContext(CartShopContext);
    const { productCounter, setProductCounter } = useContext(ProductCounterContext);

    useEffect(() => {
        localStorage.removeItem("currentCart")
    }, [])

    const handleProduct = () => {
        setCartCounter(cartCounter + 1)
        let cartShopListCopy = [...cartShopList]; 
        let ids = cartShopListCopy.map((prd)=>prd.id)       
        if(ids.includes((product._id))){
            console.log(product._id);
            cartShopListCopy.map((prd, i)=>{
                if(prd.id===product._id){
                    prd.qty = prd.qty + 1;                    
                }
                return prd;
            }) 
        }else {
            cartShopListCopy.push({ id: product._id, description: product.description, category: product.category, photo: product.photo, price: product.salePrice,
                 qty: cartCounter + 1 });
        }
        setCartShopList(cartShopListCopy);   
        addStorageCart(cartShopListCopy);
        updateProductCounter(cartShopListCopy);       
    }

    const updateProductCounter = (cartShopList) => {
        let counter = cartShopList.length;
        setProductCounter(counter);
    }
    const addStorageCart = (cartShopList) =>{
        localStorage.setItem('currentCart',JSON.stringify(cartShopList));
    } 
   
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={product.photo} className="card-img-src" />
            </div>
            <div className='card-info'>
                <p className='card-info-title'>{product.description} </p>
                <p className='card-info-body'>{product.category}</p>
            </div>
            <div className='card-footer'>
                <span className='card-footer-price'>S/. {product.salePrice}</span>
                <div className="card-footer-buttons">
                    <div className="card-footer-buttons-less" onClick={() => { setCartCounter(cartCounter - 1) }}>-</div>
                    <div className="card-footer-buttons-counter">{cartCounter}</div>
                    <div className="card-footer-buttons-add" onClick={handleProduct}>+</div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;