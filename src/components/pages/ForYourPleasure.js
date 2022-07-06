import Header from "../Header/Header";
import CoffeeList from "../CoffeeList/CoffeeList";
import Footer from "../Footer/Footer";
import img from '../../img/hot_coffee.jpg';
import bg from '../../img/bg_coffee.jpg';

const ForYourPleasure = () => {
    return (
        <>
            <Header bg={bg}/>
            <CoffeeList newImg={img}/>
        </>
    )
}

export default ForYourPleasure;