import React, { useState, useEffect } from "react";
import NoLoggedNavbar from "../../components/NoLoggedNavbar";
import LoggedNavbar from "../../components/LoggedNavbar";
import ProductCard from "../../components/ProductCard";
import Search from "../../components/Search";
import ModalShopCart from "../../components/ModalShopCart";
import CartButton from "../../components/CartButton";
import './styles.sass'

export const FilterContext = React.createContext({});
export const ProductCounterContext = React.createContext({})
export const CartShopContext = React.createContext({});
function PetShop() {
    const [selectedFilter, setFilter] = useState("Nombre");
    const [renderBy, setRenderBy] = useState({
        Nombre: "",
        Category: "Cat1",
        Precio: "",
        Nivel: "Básico",
    });
   
    const [openModalShopCart, setOpenModalShopCart] = useState(false);
    const [cartShopList, setCartShopList] = useState([]);//list of cartshop
    const [products, setProducts] = useState([])//list of products
    const [productCounter, setProductCounter] = useState(0);

    
    useEffect(() => {
        fetch('http://localhost:3001/api/products/findAllProducts', {
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
        <>
            <ProductCounterContext.Provider value={{ productCounter, setProductCounter }}>
                <CartShopContext.Provider value={{cartShopList, setCartShopList}}>
                    <FilterContext.Provider
                        value={{ selectedFilter, setFilter, renderBy, setRenderBy }}
                    >
                        <div className='petshop'>

                            <NoLoggedNavbar />
                            <hr />

                            <h1 className="petshop-tittle">Nuestros productos</h1>
                            <div className="petshop-search">
                                {/* <Search /> */}
                            </div>

                            <main className="petshop-main">
                                <div className="petshop-main-products">
                                    <div className="petshop-main-products-product">
                                        {products.map((product) => {
                                            return <ProductCard key={product._id} product={product} />
                                        })}
                                    </div>
                                    {openModalShopCart && <ModalShopCart closeModalShopCart={setOpenModalShopCart} />}
                                </div>
                            </main>
                        </div>
                        <div className="cart-button-container" onClick={() => { setOpenModalShopCart(true) }}>
                            <CartButton productCounter={productCounter} />
                        </div>
                    </FilterContext.Provider>
                </CartShopContext.Provider>
            </ProductCounterContext.Provider>
        </>
    )
}

export default PetShop;