import './app.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from './components/MainLayout';
import Home from './routes/Home';
import About from './routes/About';
import Industries from './routes/Industries';
import Services from './routes/Services';
import Translation from './routes/Translation';
import FAQ from './routes/FAQ';
import Contact from './routes/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const element = document.getElementById(pathname.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="industries" element={<Industries />} />
          <Route path="services" element={<Services />} />
          <Route path="translation" element={<Translation />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
