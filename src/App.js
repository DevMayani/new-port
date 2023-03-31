
import './App.css';
import Home from './components/home/home';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import useLocalStorage from 'use-local-storage'

function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
  }

  
  return (
    <div className="app" data-theme={theme}>
       <Sidebar theme={theme} switchTheme={switchTheme} className='side' />
       <main className='main'>
     <Home />
     <About />
     <Services />
     <Resume />
     <Portfolio />
     <Contact theme={theme} />
     </main>
    </div>
  );
}

export default App;
