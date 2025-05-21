import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from '../components/about/About'
import Services from '../components/services/Services'
import Resume from '../components/resume/Resume'
import Portfolio from '../components/portfolio/Portfolio'
import Contact from '../components/contact/Contact'
import Hero from '../components/hero/hero'
import useLocalStorage from 'use-local-storage';

const Home = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // Scroll after short delay to ensure component has mounted
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);
  
  return (
    <div >
    <Hero />
   <About />
     <Services />
     <Resume />
     <Portfolio />
     <Contact theme={theme} />
 </div>
  )
}

export default Home
