import './styles.sass'

const Login = () => {
    return (
        <div className="login">
            <input type="text" className="login-email" placeholder="Correo" />
            <input type="text" className="login-password" placeholder="Password" />
            <input type="submit" value="Iniciar Sesión" className='login-button' />
            <p className='login-reset-password'>¿Olvidaste tu contraseña?</p>
            <p className='login-register'>Regístrate</p>
           
        </div>
    )
}

export default Login;