// import { Outlet } from 'react-router-dom';
import Home from '../routes/Home';
import './styles/mainLayout.css';
import About from '../routes/About';
import Industries from '../routes/Industries';
import Services from '../routes/Services';
import Translation from '../routes/Translation';
import FAQ from '../routes/FAQ';
import Contact from '../routes/Contact';
import Footer from '../routes/footer';

function MainLayout() {
  return (
    <main className="page_container">
      {/* <Outlet /> */}
      <Home />
      <About />
      <Industries />
      <Services />
      <Translation />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

export default MainLayout;
