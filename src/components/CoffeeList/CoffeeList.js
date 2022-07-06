import './CoffeeList.sass';
import img from '../../img/girl.jpg';
import logo_black from '../../img/logo_2_black.png';
import aromistico from '../../img/aromistico.jpg';
import Footer from '../Footer/Footer';

const CoffeeList = ({newImg}) => {
    return (
        <main className="coffeeList">
            <div className="container">
                <div className="wrapper">
                    <img src={newImg ? newImg : img} alt="" className="coffeeList__img" />
                    <div className='coffeeList__wrapper'>
                        <h2 className="coffeeList__title">About our beans</h2>
                        <div className="footer__wrapper">
                            <img src={logo_black} alt="" className="footer__logo" />
                            <div className="footer__divider_left"></div>
                            <div className="footer__divider_right"></div>
                        </div>
                        <p className="coffeeList__descr">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br/> <br/>

    Afraid at highly months do things on at. Situation recommend objection do intentionx
    so questions. <br/>
    As greatly removed calling pleased improve an. Last ask him cold feel <br/>
    met spot shy want. Children me laughing we prospect answered followed. At it went
    is song that held help face.
                        </p>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="coffeeList__filters_wrapper">
                    <div className="coffeeList__search_wrapper">
                        <div className="coffeeList__looking">Lookiing for</div>
                        <input type="text" placeholder='start typing here...'/>
                    </div>
                    <div className="coffeeList__filter_wrapper">
                        <div className="coffeeList__filter_descr">Or filter</div>
                        <ul className="coffeeList__items">
                            <li className="coffeeList__item"><a href="#">Brazil</a></li>
                            <li className="coffeeList__item"><a href="#">Kenya</a></li>
                            <li className="coffeeList__item"><a href="#">Columbia</a></li>
                        </ul>
                    </div>
                </div>
                <ul className="coffeeList__coffee">
                    <li className="coffeeList__coffee_item">
                        <a href="" className='coffeeList__link'><img src={aromistico} alt="" /></a>
                        <div className="coffeeList__coffee_descr">AROMISTICO Coffee 1 kg</div>
                        <div className="coffeeList__country">
                            Brazil
                        </div>
                        <div className="coffeeList__price">6.99$</div>
                    </li>
                    <li className="coffeeList__coffee_item">
                        <a href="" className='coffeeList__link'><img src={aromistico} alt="" /></a>
                        <div className="coffeeList__coffee_descr">AROMISTICO Coffee 1 kg</div>
                        <div className="coffeeList__country">
                            Brazil
                        </div>
                        <div className="coffeeList__price">6.99$</div>
                    </li>
                    <li className="coffeeList__coffee_item">
                        <a href="" className='coffeeList__link'><img src={aromistico} alt="" /></a>
                        <div className="coffeeList__coffee_descr">AROMISTICO Coffee 1 kg</div>
                        <div className="coffeeList__country">
                            Brazil
                        </div>
                        <div className="coffeeList__price">6.99$</div>
                    </li>
                    <li className="coffeeList__coffee_item">
                        <a href="" className='coffeeList__link'><img src={aromistico} alt="" /></a>
                        <div className="coffeeList__coffee_descr">AROMISTICO Coffee 1 kg</div>
                        <div className="coffeeList__country">
                            Brazil
                        </div>
                        <div className="coffeeList__price">6.99$</div>
                    </li>
                    <li className="coffeeList__coffee_item">
                        <a href="" className='coffeeList__link'><img src={aromistico} alt="" /></a>
                        <div className="coffeeList__coffee_descr">AROMISTICO Coffee 1 kg</div>
                        <div className="coffeeList__country">
                            Brazil
                        </div>
                        <div className="coffeeList__price">6.99$</div>
                    </li>
                    <li className="coffeeList__coffee_item">
                        <a href="" className='coffeeList__link'><img src={aromistico} alt="" /></a>
                        <div className="coffeeList__coffee_descr">AROMISTICO Coffee 1 kg</div>
                        <div className="coffeeList__country">
                            Brazil
                        </div>
                        <div className="coffeeList__price">6.99$</div>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default CoffeeList;