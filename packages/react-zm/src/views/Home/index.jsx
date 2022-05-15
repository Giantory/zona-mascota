import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";
import Search from "../../components/Search";
import './styles.sass'

export const FilterContext = React.createContext({});
function Home() {
    const [selectedFilter, setFilter] = useState("Nombre");
    const [renderBy, setRenderBy] = useState({
        Nombre: "",
        Category: "Cat1",
        Precio: "",
        Nivel: "Básico",
    });
    return (
        <div className='home'>
            <Navbar />
            <h1 className="home-tittle">Nuestros productos</h1>
            <FilterContext.Provider
                value={{ selectedFilter, setFilter, renderBy, setRenderBy }}
            >
                <div className="home-products">
                    <div className="home-products-search">
                        <Search/>
                    </div>
                    <div className="home-products-product">
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
                </div>
            </FilterContext.Provider>
        </div>
    )
}

export default Home;