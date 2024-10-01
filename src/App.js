import './app.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import MainLayout from './components/MainLayout';
import Header from './components/Header';
import ScrollUp from './components/scrollUp';
import PreLoader from './components/preLoader';

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
      <Helmet>
        {/* Charset & Compatibility */}
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Title (Expanded with relevant keywords) */}
        <title>
          Wika Translate
          - Professional Translation & Interpretation Services in Rwanda | Legal, Technical & More.
        </title>

        {/* Enhanced Description */}
        <meta name="description" content="Wika Translate is a leading and well-established translation agency, offering expert language solutions to businesses, individuals, and organizations in Kigali, Rwanda, and globally. Specializing in legal, technical, business, and certified translations, we deliver fast, accurate, and culturally relevant services across multiple languages. Trusted by global brands, Wika Translate ensures quality, confidentiality, and affordability, making us the preferred choice for professional translation and interpretation services." />

        {/* Expanded Keywords */}
        <meta name="keywords" content="professional translation services in rwanda, translation services in kigali, legal translation services, technical translation services, business translation services, certified translation in rwanda, kinyarwanda to english translation, english to french translation, swahili translation services, arabic translation services, german translation services, translation services in over 150 languages, rwanda interpreters for conferences, document translation in rwanda, simultaneous interpretation in kigali, legal interpreters in rwanda, medical translation services, financial translation services, marketing translation services, website translation in rwanda, translation agency in east africa, language solutions in rwanda, language service provider in kigali, Arabic, translation for NGOs in rwanda, translation for businesses in rwanda, notarized translation services, conference interpretation services, professional translators for global languages, corporate translation solutions, multilingual translation services, international translation agency, french to kinyarwanda interpreters, portuguese translators, spanish translation services, italian translation services, portuguese to english translations, swahili interpreters, translation services for individuals and organizations" />

        {/* Robots (for indexing & crawling) */}
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.wikatranslate.net/" />

        {/* Language Tag */}
        <meta httpEquiv="Content-Language" content="en" />

        {/* Open Graph Tags */}
        <meta property="og:site_name" content="Wika Translate" />
        <meta property="og:title" content="Professional Translation Services in Rwanda | Wika Translate" />
        <meta property="og:description" content="Wika Translate provides specialized legal, technical, and business translation and interpretation services. Trusted by global companies and individuals alike." />
        <meta property="og:url" content="https://www.wikatranslate.net/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.wikatranslate.net/images/og-image.jpg" />
        {' '}
        {/* Image for social media sharing */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="
             Wika Translate - Professional Translation & Interpretation Services in Rwanda | Legal, Technical & More."
        />
        <meta name="twitter:description" content="Offering professional translation services in Rwanda, including legal, technical, and business translations for businesses and individuals worldwide." />
        <meta name="twitter:image" content="https://www.wikatranslate.net/images/og-image.jpg" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Wika Translate",
            "url": "https://www.wikatranslate.net/",
            "logo": "https://www.wikatranslate.net/images/logo.png",
            "sameAs": [
              "https://www.facebook.com/profile.php?id=100076180103188",
              "https://www.twitter.com/wikatranslate",
              "https://www.linkedin.com/company/81655771"
              "https://www.instagram.com/wikatranslate"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+250788933063",
              "contactType": "Customer Service",
              "areaServed": "RW",
              "availableLanguage": "English, French, Kinyarwanda"
            }
          }
        `}
        </script>

        {/* Author */}
        <meta name="author" content="Wika Translate Team" />
      </Helmet>

      <PreLoader />
      <ScrollToTop />
      <ScrollUp />
      <Header />
      <MainLayout />
    </>
  );
}

export default App;
