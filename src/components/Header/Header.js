import './Header.sass';

const Header = () => {
    return (
        <header className='lowHeader'>
            <div className="container">
                <ul className="lowHeader__items">
                    <li className="lowHeader__item"><a href="#">Coffee house</a></li>
                    <li className="lowHeader__item"><a href="#">Our coffee</a></li>
                    <li className="lowHeader__item"><a href="#">For your pleasure</a></li>
                </ul>
                <h2 className="lowHeader__title">Our Coffee</h2>
            </div>
        </header>
    )
}

export default Header;