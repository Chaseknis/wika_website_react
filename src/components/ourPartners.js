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
    <section id="our-partners">
      <div className="our-partners-container">
        <div className="our-partners-header">
          <div data-aos="zoom-in-right">
            <h1 className="our-partners-title">
              Our Partners
            </h1>
          </div>
          <div data-aos="zoom-out-up">
            <h2 className="our-partners-subtitle">
              We Feel Very Proud For Our Great Achievements
            </h2>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          id="scale_Partners"
          className="our-partners-grid"
        >
          <div className="partner-item">
            <img src={PaxforPeace} alt="Guaranty Trust Bank" className="partner-logo" />
          </div>
          <div className="partner-item">
            <img src={mPharma} alt="mPharma Rwanda" className="partner-logo" />
          </div>
          <div className="partner-item">
            <img src={HIVOS} alt="HIVOS International" className="partner-logo" />
          </div>
          <div className="partner-item">
            <img src={care} alt="CARE Rwanda" className="partner-logo" />
          </div>
          <div className="partner-item">
            <img src={GTBank} alt="Guaranty Trust Bank" className="partner-logo" />
          </div>
          <div className="partner-item">
            <img src={Ishyo} alt="Ishyo Art Center" className="partner-logo" />
          </div>
          <div className="partner-item">
            <img src={technisup} alt="Technisup Rwanda LTD" className="partner-logo" />
          </div>
          <div className="partner-item">
            <img src={OryxEnergies} alt="ORYX Energies Rwanda" className="partner-logo" />
          </div>
          <div className="partner-item">
            <img src={SmartAfrica} alt="Smart Africa" className="partner-logo" />
          </div>
          <div className="partner-item">
            <img src={BurkinaFaso} alt="Burkina Faso" className="partner-logo" />
          </div>
          <div className="partner-item">
            <img src={Rwanda} alt="Rwanda Government" className="partner-logo" />
          </div>
          <div className="partner-item">
            <img src={Irembo} alt="Irembo" className="partner-logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPartners;
