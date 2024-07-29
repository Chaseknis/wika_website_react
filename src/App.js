import './index.css';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './routes/Home';
import About from './routes/About';
import Industries from './routes/Industries';
import Services from './routes/Services';
import Translation from './routes/Translation';
import FAQ from './routes/FAQ';
import Contact from './routes/Contact';

function App() {
  return (
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
  );
}
export default App;
