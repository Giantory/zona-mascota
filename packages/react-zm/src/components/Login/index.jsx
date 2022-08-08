import './styles.sass'

const Login = ({closeModalSignUp}) => {
    return (
        <div className="login">
            <form className="login-form">
                <input type="text" className="login-form-email" placeholder="Correo" />
                <input type="text" className="login-form-password" placeholder="Password" />
                <input type="submit" value="Iniciar Sesión" className='login-form-button' />
            </form>            
            <p className='login-reset-password'>¿Olvidaste tu contraseña?</p>
            <strong className='login-register' onClick={()=>{closeModalSignUp(true)}}>Regístrate</strong>           
        </div>
    )
}
export default Login;