import { useEffect, useLayoutEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { App as KonstaApp } from 'konsta/react';
import { modeTypes, themeTypes } from './types/theme';

// Pages
import Signin from './pages/Signin';
import Home from './pages/Home';
import Channels from './pages/Channels';
import Publisher from './pages/Publisher';

function App() {
  const [theme, setTheme] = useState<themeTypes>('material');
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  useLayoutEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'));
  });

  const toogleTheme = () => {
    if (theme === 'ios') {
      setTheme('material');
    } else {
      setTheme('ios');
    }
  };

  const [currentColorTheme, setCurrentColorTheme] = useState('');
  const setColorTheme = (color: string) => {
    const htmlEl = document.documentElement;
    htmlEl.classList.forEach((c) => {
      if (c.includes('k-color')) htmlEl.classList.remove(c);
    });
    if (color) htmlEl.classList.add(color);
    setCurrentColorTheme(color);
  };

  useEffect(() => {
    (window as any).setTheme = (t: themeTypes) => setTheme(t);
    (window as any).setMode = (mode: modeTypes) => {
      if (mode === 'dark') document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    };
  }, []);

  const inIFrame = window.parent !== window;
  useLayoutEffect(() => {
    if (window.location.href.includes('safe-areas')) {
      const html = document.documentElement;
      if (html) {
        html.style.setProperty(
          '--k-safe-area-top',
          theme === 'ios' ? '44px' : '24px'
        );
        html.style.setProperty('--k-safe-area-bottom', '34px');
      }
    }
  }, [theme]);

  return (
    <KonstaApp theme="material" className="!dark" safeAreas={!inIFrame}>
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/channels" element={<Channels />} />
          <Route path="/publish" element={<Publisher />} />
        </Routes>
      </Router>
    </KonstaApp>
  );
}

export default App;
