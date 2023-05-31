import PageLayout from "./components/layout/PageLayout";
import AboutMe from './components/about-me/AboutMe';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <PageLayout>
        <AboutMe />
        <Projects/>
        <Skills />
        <Education/>
        <Contact/>
      </PageLayout>
    </>
  );
}

export default App;
