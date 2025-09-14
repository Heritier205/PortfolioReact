import React, { useEffect } from 'react';
import './App.css'
import SidebarLeft from './Components/SidebarLeft';
import SidebarRight from './Components/SidebarRight';
import Header from './Components/Header';
import PhoneHeader from './Components/phoneHeader'
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services'
import Projects from './Components/Projects';
import Journey from './Components/Journey'
import Skills from './Components/Skills';
import { socialData } from './Data/Constants';
import './Components/variables.css'




// import Typewriter from './Components/type';

function App() {
  const changeColors = (Scroll) => {
    // Changement de couleur basé sur scrollPercent
          if (Scroll < 5) {
            document.documentElement.style.setProperty('--backgroundColor', '#c0c2c5ff');
            document.documentElement.style.setProperty('--textColor', '#00ADB5');
            document.documentElement.style.setProperty('--titleColor', '#21201fff');
            document.documentElement.style.setProperty('--linksFill', '#21201fff');  
          }
          if (Scroll > 5 & Scroll < 30) {
            document.documentElement.style.setProperty('--backgroundColor', '#222831');
            document.documentElement.style.setProperty('--textColor', '#00ADB5');
            document.documentElement.style.setProperty('--titleColor', '#fff');
            document.documentElement.style.setProperty('--linksFill', '#00ADB5');
          }
          if (Scroll > 30 & Scroll < 50) {
            document.documentElement.style.setProperty('--backgroundColor', '#222831');
            document.documentElement.style.setProperty('--textColor', '#ffffffb0');
            document.documentElement.style.setProperty('--titleColor', '#00ADB5');
            document.documentElement.style.setProperty('--linksFill', '#fff');
          }
          if (Scroll > 50 & Scroll < 70) {
            document.documentElement.style.setProperty('--backgroundColor', '#222831');
            document.documentElement.style.setProperty('--textColor', '#00ADB5');
            document.documentElement.style.setProperty('--titleColor', '#fff');
            document.documentElement.style.setProperty('--linksFill', '#ffd369');
          }
          if (Scroll > 70 & Scroll <85) {
            document.documentElement.style.setProperty('--backgroundColor', '#222831');
            document.documentElement.style.setProperty('--textColor', '#00ADB5');
            document.documentElement.style.setProperty('--titleColor', '#fff');
            document.documentElement.style.setProperty('--linksFill', '#00ADB5');
          }
          if (Scroll > 85 & Scroll < 100) {
            document.documentElement.style.setProperty('--backgroundColor', '#222831');
            document.documentElement.style.setProperty('--textColor', '#00ADB5');
            document.documentElement.style.setProperty('--titleColor', '#fff');
            document.documentElement.style.setProperty('--linksFill', '#1468ceff');
          }
  }

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (currentScroll / scrollHeight) * 100;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          document.documentElement.style.setProperty('--scrollY', `${scrollPercent}%`); // Utilise directement scrollPercent
          changeColors(scrollPercent)
          ticking = false;
        });
      }
      ticking = true;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // ⚠️ pas besoin de dépendance scrollY


  return (
    <div className="App">

      <SidebarLeft Socials={socialData} />
      <div className="Main">
        <Header />
        <div className="Content">
          <Home id='Home' />
          <About id='About' />
          <Services id='Services' />
          <Projects id='Projects' />
          <Journey id='Journey' />
          <Skills id='Skills' />
        </div>
        <PhoneHeader/>
      </div>
      <SidebarRight Email={`heritieradakanoutg@gmail.com `} />
    </div>
  );
}

export default App;
