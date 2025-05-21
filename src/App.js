import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './components/home/home';
import Sidebar from './components/sidebar/Sidebar';
import Vant from './pages/case/vant'
import useLocalStorage from 'use-local-storage';
import Home from './pages/home'
import Gadgetify from './pages/case/gadgetify';
import Campusgenie from './pages/case/campusgenie';
import Theragist from './pages/case/theragist';
import ScrollToTop from './components/scrollTop';
function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <Router>
       <ScrollToTop />
      <div className="app" data-theme={theme}>
        {/* Sidebar visible on all routes */}
        <Sidebar theme={theme} switchTheme={switchTheme} className="side" />

        <main className="main">
        
         
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case/vant" element={<Vant />} />
            <Route path="/case/gadgetify" element={<Gadgetify />} />
            <Route path="/case/campusgenie" element={<Campusgenie />} />
            <Route path="/case/theragist" element={<Theragist />} />
        
          </Routes>
        
        
        </main>
      </div>
    </Router>
  );
}

export default App;
