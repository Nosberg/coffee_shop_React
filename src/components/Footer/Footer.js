import './Footer.sass';
import logo_black from '../../img/logo_2_black.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <ul className="footer__items">
                    <li className="footer__item"><a href="#">Coffee house</a></li>
                    <li className="footer__item"><a href="#">Our coffee</a></li>
                    <li className="footer__item"><a href="">For your pleasure</a></li>
                </ul>
                <div className="footer__wrapper">
                    <img src={logo_black} alt="" className="footer__logo" />
                    <div className="footer__divider_left"></div>
                    <div className="footer__divider_right"></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;