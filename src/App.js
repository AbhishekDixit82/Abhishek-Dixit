import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Certificates from './components/certificates/Certificates';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import WorkExperience from './components/work-Experience/WorkExperience';

function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Certificates />
        <WorkExperience />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
