import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

//views
import Home from "./views/PetShop";
import Landing from "./views/Landing";
import MyAppointments from "./views/MyAppointments";
import MyPets from "./views/MyPets";
import PetShop from "./views/PetShop";
import Products from "./views/Products";
import Clients from "./views/Clients";



//components
import Sidebar from "./components/Sidebar";
import './App.sass'

//context
export const isSelectedContext = React.createContext({});



function App() {

    const [adminOptionSelected, setAdminOptionSelected] = useState(1);
    const isSelected = (option) => {
        if (option === adminOptionSelected) {
            return "selected";
        } else {
            return "unselected";
        }
    };
    const adminOptions = [
        {
            path: "/admin-products",
            name: "Productos",
            icon: <svg className={"sidebar-body-link-option-" + (isSelected(1)) + "-icon-svg"} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path className={"sidebar-body-link-option-" + (isSelected(1)) + "-icon-svg-fill"} d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z" />
            </svg>
        },
        {
            path: "/admin-clients",
            name: "Clientes",
            icon: <svg className={"sidebar-body-link-option-" + (isSelected(2)) + "-icon-svg"} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path className={"sidebar-body-link-option-" + (isSelected(2)) + "-icon-svg-fill"} d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path className={"sidebar-body-link-option-" + (isSelected(2)) + "-icon-svg-fill"} fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
        },
    ];

    const isAdmin =true; //is not a feature
    return (
        <div className="App">
            {isAdmin &&
                <isSelectedContext.Provider value={{ isSelected, adminOptionSelected, setAdminOptionSelected }}>
                    <aside>
                        <Sidebar options={adminOptions} />
                    </aside>
                </isSelectedContext.Provider>
            }
            <main className="app-main">
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/petshop' element={<PetShop />} />
                    <Route path='/myappointments' element={<MyAppointments />} />
                    <Route path='/mypets' element={<MyPets />} />
                    <Route path='/admin-products' element={<Products />} />
                    <Route path='/admin-clients' element={<Clients />} />
                </Routes>
            </main>

        </div>
    )
} export default App;