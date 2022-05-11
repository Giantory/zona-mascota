import Login from '../../components/Login';
import Service from '../../components/Service';
import { Link } from 'react-router-dom';
import './styles.sass';
function Landing() {
    return (
        <div className='landing'>
            <header className='landing-header'>
                <div className='landing-header-banner'>
                    <div className='landing-header-banner-top'>
                        <Link to='/home'>
                            <div className='landing-header-banner-top-button'>
                                <p className='landing-header-banner-top-button-text'>Ir a la tienda</p>
                                <div className='landing-header-banner-top-button-icon'></div>
                            </div>
                        </Link>
                    </div>
                    <div className='landing-header-banner-bot'>
                        <Login />
                    </div>
                </div>
            </header>
            <section className='landing-about'>
                <div className='landing-about-left'>
                    <h1 className='landing-about-left-tittle'>¿Quiénes somos?</h1>
                    <p className='landing-about-left-description'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book.
                    </p>
                </div>
                <div className='landing-about-photo'> </div>
            </section>
            <section className='landing-services'>
                <h1 className='landing-services-tittle'>Nuestros servicios</h1>
                <div className='landing-services-card'>
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                    <Service />
                </div>
            </section>
            <section className='landing-shop'>
                <div className='landing-shop-background'>
                    <button className='landing-shop-button' >Ir a la tienda</button>
                </div>
            </section>
            <div className='landing-footer'></div>
        </div>
    )
}
export default Landing;