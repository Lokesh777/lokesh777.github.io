import React, { Suspense, lazy, useEffect } from "react";
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
  useEffect(() => {
    const fixA11y = () => {
      document.querySelectorAll('[id^="chakra-toast-manager"]').forEach((node) => {
        node.setAttribute("aria-hidden", "true");
        node.removeAttribute("role");
      });
      document.querySelectorAll("img:not([alt])").forEach((img) => {
        img.setAttribute("alt", "");
      });
      document.querySelectorAll('svg[role="img"]:not([aria-label]):not([aria-labelledby])').forEach((svg) => {
        svg.setAttribute("aria-hidden", "true");
        svg.setAttribute("focusable", "false");
        svg.setAttribute("role", "presentation");
      });
    };

    fixA11y();
    const observer = new MutationObserver(fixA11y);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

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
