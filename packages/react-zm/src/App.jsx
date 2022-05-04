import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Landing from "./views/Landing";
import MyAppointments from "./views/MyAppointments";
import MyPets from "./views/MyPets";

function App(){
    return (
        <div className="App"> 
            <Routes>
                <Route path='/' element={<Landing/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/myappointments' element={<MyAppointments/>}/>
                <Route path='/mypets' element={<MyPets/>}/>
            </Routes>
        </div> 
    )
}export default App;