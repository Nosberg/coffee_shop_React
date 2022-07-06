import './Footer.sass';
import logo_black from '../../img/logo_2_black.png';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <ul className="footer__items">
                    <li className="footer__item"><Link to='/'>Coffee house</Link></li>
                    <li className="footer__item"><Link to='/our_coffee'>Our coffee</Link></li>
                    <li className="footer__item"><Link to='/for_your_pleasure'>For your pleasure</Link></li>
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