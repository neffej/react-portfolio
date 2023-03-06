import React from "react";
import Header from './components/Header';
import Hero from './components/pages/Hero'
import About from './components/pages/About'
import Resume from './components/pages/Resume'
import Contact from './components/pages/Contact'
import Portfolio from './components/Portfolio'
 

function App() {
  return (
  <div>
    <Header />
    <Hero />
    <About/>
    <Resume />
    <Portfolio />
    <Contact />
   </div>
  );
}

export default App;
