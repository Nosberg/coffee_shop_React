import './App.sass';
import MainHeader from '../MainHeader/MainHeader';
import AboutUs from '../AboutUs/AboutUs';
import OurBest from '../OurBest/OurBest';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainPage from '../pages/MainPage';
import CoffeeList from '../CoffeeList/CoffeeList';
import OurCoffee from '../pages/OurCoffee';
import CoffeePage from '../pages/CoffeePage';
import ForYourPleasure from '../pages/ForYourPleasure';

function App() {
  return (
    <div className="app">
		<ForYourPleasure/>
		{/* <MainHeader/>
		<AboutUs/>
    	<OurBest/>
		<Footer/> */}
	</div>
  );
}

export default App;
