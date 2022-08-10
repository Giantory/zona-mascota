import { useState, useContext } from 'react';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
import { userLoggedContext } from '../../App';
import swal from 'sweetalert';
import './styles.sass';

const Login = ({ closeModalSignUp }) => {

    const [user, setUser] = useState({ email: '', password: '' });
    const {userLogged, setUserLogged} = useContext(userLoggedContext);


    let navigate = useNavigate()


    const HandleLogin = (e) => {
        e.preventDefault();    

        fetch('https://zona-mascota-backend.herokuapp.com/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => {
                return res.json();
            })
            .then(response => {
                if(response.success) {
                    localStorage.setItem('userLogged',JSON.stringify(response))
                    setUserLogged({logged : true, typeUser : response.data.type})                                        
                    if(response.data.type ==="admin") {
                        navigate("/admin-dashboard"); 
                    }else {
                        navigate("/petshop");
                    }                 
                }else{
                    swal({
                        title: "Autenticación fallida",
                        text: response.message,
                        icon: "warning",
                        button: "Aceptar"
                    });
                }               
            })   
    }   
    return (
        <div className="login">
            <form className="login-form" onSubmit={HandleLogin}>
                <input type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="login-form-email" placeholder="Correo" />
                <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} className="login-form-password" placeholder="Password" />
                <input type="submit" value="Iniciar Sesión" className='login-form-button' />
            </form>
            <p className='login-reset-password'>¿Olvidaste tu contraseña?</p>
            <strong className='login-register' onClick={() => { closeModalSignUp(true) }}>Regístrate</strong>
        </div>
    )
}
export default Login;