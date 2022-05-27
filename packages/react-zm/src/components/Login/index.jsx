import './styles.sass'

const Login = ({closeModalSignUp}) => {
    return (
        <div className="login">
            <input type="text" className="login-email" placeholder="Correo" />
            <input type="text" className="login-password" placeholder="Password" />
            <input type="submit" value="Iniciar Sesión" className='login-button' />
            <p className='login-reset-password'>¿Olvidaste tu contraseña?</p>
            <strong className='login-register' onClick={()=>{closeModalSignUp(true)}}>Regístrate</strong>
           
        </div>
    )
}
export default Login;