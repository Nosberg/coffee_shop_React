import './CoffeeList.sass';
import img from '../../img/girl.jpg';
import logo_black from '../../img/logo_2_black.png';
import { useHttp } from '../../hooks/http.hook';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCoffeeList } from '../reducers.js/reducer';

const CoffeeList = ({newImg}) => {
    const {request} = useHttp();
    const getCoffee = async () => {
        const res = await request('http://localhost:3001/heroes', 'GET');
        return res;
    }

    const coffeeListNew = useSelector((state) => state.coffee.value)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(coffeeListNew);
        getCoffee()
            .then(data => dispatch(getCoffeeList(data)));
    }, []);

    let arr = coffeeListNew.map(item => {
        return (
                    <li key={item.id} className="coffeeList__coffee_item">
                        <Link state={{id: item.id, 
                                      thumbnail: item.thumbnail, 
                                      name: item.name, 
                                      descr: item.description,
                                      country: item.country}} to='/coffee_page' className='coffeeList__link'><img src={item.thumbnail} alt="" /></Link>
                        <div className="coffeeList__coffee_descr">{item.name}</div>
                        <div className="coffeeList__country">
                            {item.country}
                        </div>
                        <div className="coffeeList__price">6.99$</div>
                    </li>
        )
    })
    return (
        <main className="coffeeList">
            <div className="container">
                <div className="wrapper">
                    <img src={newImg ? newImg : img} alt="" className="coffeeList__img" />
                    <div className='coffeeList__wrapper'>
                        <h2 className="coffeeList__title">{newImg ? 'About our goods' : 'About our beans'}</h2>
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
                    {arr}
                    {/* <li className="coffeeList__coffee_item">
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
                    </li> */}
                </ul>
            </div>
        </main>
    )
}

export default CoffeeList;