import './AboutUs.sass';
import logo_black from '../../img/logo_2_black.png';

const AboutUs = () => {
    return (
        <div className="aboutUs">
            <div className="container">
                <h2 className="aboutUs__title">About Us</h2>
                <div className="aboutUs__wrapper">
                    <img src={logo_black} alt="" className="aboutUs__logo" />
                    <div className="aboutUs__divider_left"></div>
                    <div className="aboutUs__divider_right"></div>
                </div>
                <p className="aboutUs__descr">
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
Afraid at highly months do things on at. Situation recommend objection do intention
so questions. As greatly removed calling pleased improve an. Last ask him cold feel
met spot shy want. Children me laughing we prospect answered followed. At it went
is song that held help face. <br /> <br/>

Now residence dashwoods she excellent you. Shade being under his bed her, Much
read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
horrible but confined day end marriage. Eagerness furniture set preserved far
recommend. Did even but nor are most gave hope. Secure active living depend son
repair day ladies now.
                </p>
            </div>
        </div>
    )
}

export default AboutUs;