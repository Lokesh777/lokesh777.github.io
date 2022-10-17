import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './Router/About';
import Footer from './Router/footerContact';
import Cards from './Router/projectCard';

function App() {
  return (
    <div className="App" >
       <Navbar />
       <Home/>
       <About/>
       <Cards/>
       <Footer/>
    </div>
  );
}
export default App;
