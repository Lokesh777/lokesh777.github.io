

import './App.css';
import GithubStat from './components/Github';
import Home from './components/HomePage';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
import NavbarPage from './components/Navbar';
import { SkillsSection } from './components/SkillSection';
import About from './Router/About';
import Contact from './Router/contact';
import  { ProjectsSection } from './Router/projectCard';

function App() {
  return (
    <div className="App" >
       {/* <Navbar /> */}
       <NavbarPage/>
       <Home/>
       <About/>
       <SkillsSection/>
       <ProjectsSection />
       <GithubStat/>
       {/* <Footer/> */}
       <Contact />
    </div>
  );
}
export default App;
