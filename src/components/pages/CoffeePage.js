import Header from "../Header/Header";
import CoffeeDescr from "../CoffeeDescr/CoffeeDescr";
import { useLocation } from "react-router-dom";

const CoffeePage = () => {
    const location = useLocation();
    const {id} = location.state;
    console.log(id);
    return (
        <>
            <Header/>
            <CoffeeDescr/>
        </>
    )
}

export default CoffeePage;