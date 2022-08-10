import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import swal from 'sweetalert';
import './styles.sass'

const ModalSignUp = ({closeModalSignUp}) => {
    const [ newUser, setNewUser ] = useState({email: "", password: "", name: "", surname: ""});
    const navigate = useNavigate()

    const handleSignup = (e) =>{
        e.preventDefault();    

        fetch('https://zona-mascota-backend.herokuapp.com/api/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })
            .then(res => {
                return res.json();
            })
            .then(response => {
                if(response.success === true){
                    navigate("/");
                    closeModalSignUp(false)
                }else{
                    swal({
                        title: "Autenticación fallida",
                        text: "Complete todo los campos por favor",
                        icon: "warning",
                        button: "Aceptar"
                    });
                }
            })   
    }   
    return (
        <>
            <div className="signup-background" onClick={()=>{closeModalSignUp(false)}}></div>
            <div className="signup-register">
                <h1 className="signup-register-tittle">Regístrate</h1>
                <hr className='signup-register-separator'/>
                <div className="signup-register-body">
                    <div className="signup-register-body-info">
                        <input type="text" value={newUser.name} onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}  className="signup-register-body-info-names" placeholder="Nombres" />
                        <input type="text" value={newUser.surname} onChange={(e) => setNewUser({ ...newUser, surname: e.target.value })} className="signup-register-body-info-surnames" placeholder="Apellidos" />
                    </div>
                    <input type="text" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} className="signup-register-body-email" placeholder="Correo" />
                    <input type="password" value={newUser.password} onChange={(e) => setNewUser({ ...newUser, password: e.target.value })} className="signup-register-body-password" placeholder="Password" />
                    <input type="submit" onClick={handleSignup} value="Regístrate" className='signup-register-body-button' />
                    <p className='signup-register-body-login'>¿Ya tienes una cuenta?
                    <Link style={{textDecoration: 'none'}} to={'/'}>  
                    <strong className="modal-register-body-login-link"> Iniciar sesión</strong>
                    </Link>
                    </p>                    
                </div>
            </div>
        </>

    )
}

export default ModalSignUp;