import React, { Suspense, lazy } from "react";
import "./App.css";
import Home from "./components/HomePage";
import NavbarPage from "./components/Navbar";

const About = lazy(() => import("./Router/About"));
const SkillsSection = lazy(() =>
  import("./components/SkillSection").then((m) => ({ default: m.SkillsSection }))
);
const ProjectsSection = lazy(() =>
  import("./Router/projectCard").then((m) => ({ default: m.ProjectsSection }))
);
const GithubStat = lazy(() => import("./components/Github"));
const Contact = lazy(() => import("./Router/contact"));

function SectionFallback() {
  return <div style={{ minHeight: "40vh" }} aria-hidden="true" />;
}

function App() {
  return (
    <div className="App">
      <a href="#main-content" className="skipLink">
        Skip to main content
      </a>
      <NavbarPage />
      <main id="main-content">
        <Home />
        <Suspense fallback={<SectionFallback />}>
          <About />
          <SkillsSection />
          <ProjectsSection />
          <GithubStat />
          <Contact />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
