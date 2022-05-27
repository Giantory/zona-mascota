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
function PetShop() {
    const [selectedFilter, setFilter] = useState("Nombre");
    const [renderBy, setRenderBy] = useState({
        Nombre: "",
        Category: "Cat1",
        Precio: "",
        Nivel: "Básico",
    });

    const [productCounter, setProductCounter] = useState(0);
    const [openModalShopCart, setOpenModalShopCart] = useState(false);


    return (
        <>
            <ProductCounterContext.Provider value={{ productCounter, setProductCounter }}>
                <FilterContext.Provider
                    value={{ selectedFilter, setFilter, renderBy, setRenderBy }}
                >
                    <div className='petshop'>

                        <NoLoggedNavbar />
                        <hr/>
                       
                        <h1 className="petshop-tittle">Nuestros productos</h1>
                        <div className="petshop-search">
                            <Search />
                        </div>

                        <main className="petshop-main">
                            <div className="petshop-main-products">
                                <div className="petshop-main-products-product">
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                </div>
                                {openModalShopCart && <ModalShopCart closeModalShopCart={setOpenModalShopCart} />}
                            </div>
                        </main>
                    </div>
                    <div className="cart-button-container" onClick={() => { setOpenModalShopCart(true) }}>
                        <CartButton productCounter={productCounter} />
                    </div>
                </FilterContext.Provider>
            </ProductCounterContext.Provider>
        </>
    )
}

export default PetShop;