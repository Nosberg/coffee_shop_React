import './OurBest.sass';
import solimo from '../../img/solimo.jpg';
import presto from '../../img/presto.jpg';
import aromistico from '../../img/aromistico.jpg';

const OurBest = () => {
    return (
        <div className="ourBest">
            <div className="container">
                <h2 className="ourBest__title">Our best</h2>
                <ul className="ourBest__items">
                    <li className="ourBest__item">
                        <a href="" className='ourBest__link'><img src={solimo} alt="" /></a>
                        <div className="ourBest__descr">Solimo Coffee Beans 2 kg</div>
                        <div className="ourBest__price">10.73$</div>
                    </li>
                    <li className="ourBest__item">
                        <a href="" className='ourBest__link'><img src={presto} alt="" /></a>
                        <div className="ourBest__descr">Presto Coffee Beans 1 kg</div>
                        <div className="ourBest__price">15.99$</div>
                    </li>
                    <li className="ourBest__item">
                        <a href="" className='ourBest__link'><img src={aromistico} alt="" /></a>
                        <div className="ourBest__descr">AROMISTICO Coffee 1 kg</div>
                        <div className="ourBest__price">6.99$</div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default OurBest;