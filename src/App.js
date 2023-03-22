

import './App.css';
import GithubStat from './components/Github';
import Home from './components/HomePage';
import NavbarPage from './components/Navbar';
import { SkillsSection } from './components/SkillSection';
import About from './Router/About';
import Contact from './Router/contact';
import  { ProjectsSection } from './Router/projectCard';

function App() {
  return (
    <div className="App" >
       <NavbarPage/>
       <Home/>
       <About/>
       <SkillsSection/>
       <ProjectsSection />
       <GithubStat/>
       <Contact />
    </div>
  );
}
export default App;
