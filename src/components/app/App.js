import './App.sass';
import MainHeader from '../MainHeader/MainHeader';
import AboutUs from '../AboutUs/AboutUs';
import OurBest from '../OurBest/OurBest';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="app">
		<MainHeader/>
		<AboutUs/>
    	<OurBest/>
		<Footer/>
	</div>
  );
}

export default App;
