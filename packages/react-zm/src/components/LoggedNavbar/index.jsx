import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import Logo from "../../assets/img/Logo.png"
import './styles.sass'
const LoggedNavbar = ({ token }) => {

    const [userName, setUserName] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:3001/api/client/getClient/${token.data.id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => {
                return res.json();
            })
            .then(response => {
                console.log(response)
                setUserName(response.data.client.name + " " + response.data.client.surname)
            })
    }, [])

    const logout = () => {
        localStorage.removeItem("userLogged")
        navigate("/");
    }

    return (
        <div className="logged-navbar">
            <Link to={"/"}>
                <div className="logged-navbar-logo">
                    <img src={Logo} className="logged-navbar-logo-img" />
                </div>
            </Link>
            <p className="logged-navbar-welcome">Bienvenido, <strong className="logged-navbar-welcome-user">
                {token.data.type === "admin" ? "administrador" : userName}!</strong></p>
            <p className="logged-navbar-logout" onClick={logout}>Cerrar sesión</p>
        </div>
    )
}

export default LoggedNavbar