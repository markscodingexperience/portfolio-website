import './App.css';
import Home from './Home';
import About from './About';
import Work from './Work';
import Footer from './Footer';
import { useRef } from 'react';

function App() {
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const socialsRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    console.log(sectionRef.current);
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Home scrollToSection={scrollToSection} aboutRef={aboutRef} workRef={workRef} socialsRef={socialsRef}/>
      <About ref={aboutRef}></About>
      <Work ref={workRef}></Work>
      <Footer ref={socialsRef}></Footer>
    </div>
  );
}

export default App;
