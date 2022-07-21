import Header from "../Header/Header";
import CoffeeDescr from "../CoffeeDescr/CoffeeDescr";
import { useLocation } from "react-router-dom";

const CoffeePage = () => {
    const location = useLocation();
    const {id, country, thumbnail, name, descr} = location.state;
    return (
        <>
            <Header/>
            <CoffeeDescr data={location.state}/>
        </>
    )
}

export default CoffeePage;