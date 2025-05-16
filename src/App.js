import './App.css';
import About from './components/About';
import Certifications from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';
function App() {
  return (
    <div className="App">
        <Header/>
        <Hero />
        <About/>
        <Skills/>
        <Projects/>
        <Certifications/>
        <Resume/>
        <Contact/>
        <Footer/>
    </div>
  );

}

export default App;
