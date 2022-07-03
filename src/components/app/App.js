import './App.sass';
import MainHeader from '../MainHeader/MainHeader';
import AboutUs from '../AboutUs/AboutUs';
import OurBest from '../OurBest/OurBest';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainPage from '../pages/MainPage';
import CoffeeList from '../CoffeeList/CoffeeList';

function App() {
  return (
    <div className="app">
		<Header/>
		<CoffeeList/>
		{/* <MainHeader/>
		<AboutUs/>
    	<OurBest/>
		<Footer/> */}
	</div>
  );
}

export default App;
