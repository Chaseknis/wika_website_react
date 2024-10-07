import React from 'react';
import './styles/cardItem.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/christopher-gower-vjMgqUkS8q8-unsplash.jpg';
import image3 from '../assets/image5.JPG';

function CardItems() {
  return (
    <div className="card_wrapper">
      <div className="items_card_container">
        <div className="items_card_wrapper">
          <div className="image_wrapper">
            <img src={image1} alt="Simultaneous Interpretation Services" />
          </div>

          <div className="card_description_wrapper">
            <h2 className="card_title">Interpretation Equipment Rental</h2>
            <p className="description">Interpretation Equipment Rental</p>
            <a href="/" className="see-more">
              See More
            </a>
          </div>
        </div>
      </div>
      <div className="items_card_container">
        <div className="items_card_wrapper">
          <div className="image_wrapper">
            <img src={image3} alt="Simultaneous Interpretation Services" />
          </div>

          <div className="card_description_wrapper">
            <h2 className="card_title">Simultaneous Interpretation Services</h2>
            <p className="description">Interpretation Equipment Rental</p>
            <a href="/" className="see-more">
              See More
            </a>
          </div>
        </div>
      </div>
      <div className="items_card_container">
        <div className="items_card_wrapper">
          <div className="image_wrapper">
            <img src={image2} alt="Simultaneous Interpretation Services" />
          </div>

          <div className="card_description_wrapper">
            <h2 className="card_title">Certified Translation Services</h2>
            <p className="description">Interpretation Equipment Rental</p>
            <a href="/" className="see-more">
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItems;
