import './styles.sass'

const ModalSignUp = ({closeModalSignUp}) => {
    return (
        <>
            <div className="signup-background" onClick={()=>{closeModalSignUp(false)}}></div>
            <div className="signup-register">
                <h1 className="signup-register-tittle">Regístrate</h1>
                <hr className='signup-register-separator'/>
                <div className="signup-register-body">
                    <div className="signup-register-body-info">
                        <input type="text" className="signup-register-body-info-names" placeholder="Nombres" />
                        <input type="text" className="signup-register-body-info-surnames" placeholder="Apellidos" />
                    </div>
                    <input type="text" className="signup-register-body-email" placeholder="Correo" />
                    <input type="text" className="signup-register-body-password" placeholder="Password" />
                    <input type="submit" value="Regístrate" className='signup-register-body-button' />
                    <p className='signup-register-body-login'>¿Ya tienes una cuenta? <strong className="modal-register-body-login-link">Iniciar sesión</strong></p>
                </div>
            </div>
        </>

    )
}

export default ModalSignUp;