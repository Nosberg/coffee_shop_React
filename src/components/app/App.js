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
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
	<Router>
		<div className="app">
			<Routes>
				<Route exact path='/' element={<MainPage/>}/>
				<Route exact path='/our_coffee' element={<OurCoffee/>}/>
				<Route exact path={'/coffee_page'} element={<CoffeePage/>}/>
				<Route exact path={'/for_your_pleasure'} element={<ForYourPleasure/>}/>
 			</Routes>
			<Footer/>
		</div>
	</Router>
  );
}

export default App;
