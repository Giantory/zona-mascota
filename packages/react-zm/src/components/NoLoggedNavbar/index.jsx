import { Link } from "react-router-dom"
import Logo from "../../assets/img/Logo.png"
import './styles.sass'

const NoLoggedNavbar = ({ closeModalSignUp }) => {
    
    return (
        <div className="nologged-navbar">
            <Link to={"/"}>
            <div className="nologged-navbar-logo">
                <img src={Logo} className="nologged-navbar-logo-img" />
            </div>
            </Link>
            <p className="nologged-navbar-message">¿Quieres agender una cita?</p> 
            <button className="nologged-navbar-register" onClick={() => { closeModalSignUp(true) }}>Crear una cuenta</button>
        </div>
    )
}

export default NoLoggedNavbar