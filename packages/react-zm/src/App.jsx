import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

//views
import Landing from "./views/Landing";
import MyAppointments from "./views/MyAppointments";
import MyPets from "./views/MyPets";
import PetShop from "./views/PetShop";
import Checkout from "./views/Checkout";

//admin-view
import Dashboard from "./views/Dashboard";

//admin-routes
import AdminRoutes from "./utils/AdminRoutes";

//others-rotues
import Unauthorized from "./views/Unauthorized";
import NotFound from "./views/NotFound";


import './App.sass'

//context
export const userLoggedContext = React.createContext({});
function App() {
    const stripePromise = loadStripe('pk_test_51LTG0ZCyW6WAA5WT4TAiAOBMMWKwQltI3M7rPpV9u4jCegEpfLengeWMtFwAcTsWFv4JYstFzPkQffjPO8DXlvbV00KSvjWDRd');
    const [userLogged, setUserLogged] = useState(false);
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("userLogged"));
        token ? setUserLogged({ logged: true, typeUser: token.data.type }) : setUserLogged(false);
    }, [])

    return (
        <userLoggedContext.Provider value={{ userLogged, setUserLogged }}>
            <Elements stripe={stripePromise}>
                <div className="App">
                    <main className="app-main">
                        <Routes>
                            <Route path='/' element={<Landing />} />
                            <Route path='/petshop' element={<PetShop />} />
                            <Route path='/myappointments' element={<MyAppointments />} />
                            <Route path='/mypets' element={<MyPets />} />
                            <Route path='/checkout' element={<Checkout />} />
                            <Route path='/admin-dashboard' element={<AdminRoutes> <Dashboard /> </AdminRoutes>}/>
                            <Route path='/unauthorized' element={<Unauthorized />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </main>
                </div>
            </Elements>
        </userLoggedContext.Provider>
    )
} export default App;