import React from 'react';
import './styles/ourPartners.css';
import care from '../assets/CARE.png';
import mPharma from '../assets/mPharma.png';
import technisup from '../assets/technisup.png';
import GTBank from '../assets/Guaranty_Trust_Bank.png';
import Ishyo from '../assets/ishyo_arst_logo.png';
import PaxforPeace from '../assets/pax_voor_vrede_logo.png.png';
import HIVOS from '../assets/hivos_global_logo.png.png';
import OryxEnergies from '../assets/oryx_energies_logo.png.png';
import SmartAfrica from '../assets/smart_africa_org_logo.png.png';
import BurkinaFaso from '../assets/burkinafaso_goverment.png';
import Rwanda from '../assets/government_logo.png';
import Irembo from '../assets/irembogovrw_logo.png';

function OurPartners() {
  return (
    <div className="our-partners-container">
      <div className="our-partners-header">
        <div>
          <h2 className="our-partners-title">
            Our Partners
            <hr />
          </h2>
          <p className="our-partners-paragraph">
            At Wika Translate Ltd, our clients are at the heart of everything we do.
            We pride ourselves on delivering tailored language solutions that not only meet
            but exceed expectations, with an unwavering commitment to professionalism and
            integrity. Our diverse clientele ranges from multinational corporations to
            individuals, each benefiting from our customized services designed to address
            their unique needs.
          </p>
        </div>
        <p className="our-partners-paragraph-two">
          By fostering trust and cultivating long-term partnerships, we ensure seamless
          communication across languages and cultures. Our focus is on delivering outstanding
          results, ensuring successful communication outcomes for every client and strengthening
          relationships that endure over time.
        </p>
      </div>
      <div
        id="scale_Partners"
        className="our-partners-grid"
      >
        <div className="partner-item">
          <img src={PaxforPeace} alt="Guaranty Trust Bank" loading="lazy" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src={mPharma} alt="mPharma Rwanda" loading="lazy" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src={HIVOS} alt="HIVOS International" loading="lazy" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src={care} alt="CARE Rwanda" loading="lazy" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src={GTBank} alt="Guaranty Trust Bank" loading="lazy" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src={Ishyo} alt="Ishyo Art Center" loading="lazy" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src={technisup} alt="Technisup Rwanda LTD" loading="lazy" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src={OryxEnergies} alt="ORYX Energies Rwanda" loading="lazy" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src={SmartAfrica} alt="Smart Africa" loading="lazy" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src={BurkinaFaso} alt="Burkina Faso" loading="lazy" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src={Rwanda} alt="Rwanda Government" loading="lazy" className="partner-logo" />
        </div>
        <div className="partner-item">
          <img src={Irembo} alt="Irembo" loading="lazy" className="partner-logo" />
        </div>
      </div>
    </div>
  );
}

export default OurPartners;
