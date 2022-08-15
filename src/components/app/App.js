import './App.sass';
import Footer from '../Footer/Footer';
import MainPage from '../pages/MainPage';
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
