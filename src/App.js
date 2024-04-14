import './App.css';
import About from './screens/about/About';
import Header from './screens/header/Header';
import Home from './screens/home/Home';
import Portfolio from './screens/portfolio/Portfolio';
import Qualification from './screens/qualification/Qualification';
import Services from './screens/servise/Services';

function App() {
  return (
    <div className="">
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Qualification />
    </div>
  );
}

export default App;
