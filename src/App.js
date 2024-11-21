import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Qualifications from './components/qualifications/Qualifications';
import Achievements from './components/achievements/Achievements';
import Certificates from './components/certificates/Certificates';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
import Works from './components/allworks/Works';

function App() {

  return (
    <>
    <Header/>
    <main>
      <Home/>
      <About/>
      <Qualifications/>
      <Projects/>
      <Works/>
      <Achievements/>
      <Certificates/>
      <Skills/>
      <Contact/>
    </main>
    <Footer/>
    <Scrollup/>
    </>
  );
}

export default App;
