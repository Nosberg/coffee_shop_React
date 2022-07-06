import './Header.sass';
import {Link} from 'react-router-dom';

const Header = ({bg}) => {
    let classNames = 'lowHeader';
    if (bg) {
        classNames = 'lowHeader ForYourPleasure';
    }
    return (
        <header className={classNames}>
            <div className="container">
                <ul className="lowHeader__items">
                    <li className="lowHeader__item"><Link to='/'>Coffee house</Link></li>
                    <li className="lowHeader__item"><Link to='/our_coffee'>Our coffee</Link></li>
                    <li className="lowHeader__item"><Link to='/for_your_pleasure'>For your pleasure</Link></li>
                </ul>
                <h2 className="lowHeader__title">{bg ? 'For your pleasure' : 'Our Coffee'}</h2>
            </div>
        </header>
    )
}

export default Header;