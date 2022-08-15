import logo_black from '../../img/logo_2_black.png';

import './CoffeeDescr.sass';

const CoffeeDescr = (props) => {
    const {country, descr, thumbnail} = props.data;
    let countryUppercase = country[0].toUpperCase() + country.substring(1);
    return (

        <main className="coffeeDescr">
            <div className="container">
                <div className="wrapper">
                    <img src={thumbnail} alt="" className="coffeeDescr__img" />
                    <div className='coffeeDescr__wrapper'>
                        <h2 className="coffeeDescr__title">About it</h2>
                        <div className="footer__wrapper">
                            <img src={logo_black} alt="" className="footer__logo" />
                            <div className="footer__divider_left"></div>
                            <div className="footer__divider_right"></div>
                        </div>
                        <div className="coffeeDescr__descr">
                            <div className="coffeeDescr__country"><span>Country:</span> {countryUppercase}</div>
                            <div className="coffeeDescr__description"><span>Description:</span> {descr}</div>
                            <div className="coffeeDescr__price">
                                Price:    <span>16.99$</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default CoffeeDescr;