
import './App.css';
import GithubStat from './components/Github';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { SkillsSection } from './components/SkillSection';
import About from './Router/About';
import Contact from './Router/contact';
// import Footer from './Router/footerContact';
import Cards from './Router/projectCard';

function App() {
  return (
    <div className="App" >
       <Navbar />
       <Home/>
       <About/>
       <SkillsSection/>
       <Cards/>  {/* //projectCarditem */}
       <GithubStat/>
       {/* <Footer/> */}
       <Contact />
    </div>
  );
}
export default App;
