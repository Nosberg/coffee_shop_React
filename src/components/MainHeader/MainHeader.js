import './MainHeader.sass';
import logo from '../../img/logo_2.png';

const MainHeader = () => {
    return (
        <header className="header">
            <div className="container">
                <ul className="header__items">
                    <li className="header__item"><a href="#">Coffee house</a></li>
                    <li className="header__item"><a href="#">Our coffee</a></li>
                    <li className="header__item"><a href="">For your pleasure</a></li>
                </ul>
                <h1 className="header__title">Everything You Love About Coffee </h1>
                <div className="header__wrapper">
                    <img src={logo} alt="" className="header__logo" />
                    <div className="header__divider_left"></div>
                    <div className="header__divider_right"></div>
                </div>
                <div className="header__subtitle">We makes every day full of energy and taste</div>
                <div className="header__suggest">Want to try our beans?</div>
                <a href='#' className="header__button">More</a>
            </div>
        </header>
    )
}

export default MainHeader;