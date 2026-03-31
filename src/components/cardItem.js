import React from 'react';
import './styles/cardItem.css';
import LazyLoad from 'react-lazyload'; // Import LazyLoad

function CardItems() {
  return (
    <div className="card_wrapper">
      <div className="items_card_container">
        <div className="items_card_wrapper">
          <LazyLoad height={120} offset={100} placeholder={<div style={{ height: '20vh' }}>Loading...</div>}>
            <div className="card_item_image_wrapper image_wrapper_one">
              <div className="image_card_item image_wrapper_one" />
            </div>
          </LazyLoad>

          <div className="card_description_wrapper">
            <h2 className="card_title">Interpretation Equipment Rental</h2>
            <p className="description">
              Wika Translate offers interpretation equipment rental for multilingual
              events. Our wireless headsets and transmitters ensure clear communication,
              supported by full technical assistance for seamless real-time language
              interpretation.
            </p>
            <a href="/" className="see-more">
              See More
            </a>
          </div>
        </div>
      </div>
      <div className="items_card_container">
        <div className="items_card_wrapper">
          <LazyLoad height={120} offset={100} placeholder={<div style={{ height: '20vh' }}>Loading...</div>}>
            <div className="card_item_image_wrapper image_wrapper_two">
              <div className="image_card_item image_wrapper_two" />
            </div>
          </LazyLoad>

          <div className="card_description_wrapper">
            <h2 className="card_title">Simultaneous Interpretation Services</h2>
            <p className="description">
              Wika Translate offers real-time simultaneous interpretation for multilingual
              events. Our expert interpreters and advanced technology ensure seamless
              communication, enabling participants to engage effectively, regardless of
              language barriers.
            </p>
            <a href="/" className="see-more">
              See More
            </a>
          </div>
        </div>
      </div>
      <div className="items_card_container">
        <div className="items_card_wrapper">
          <LazyLoad height={120} offset={100} placeholder={<div style={{ height: '20vh' }}>Loading...</div>}>
            <div className="card_item_image_wrapper image_wrapper_three">
              <div className="image_card_item image_wrapper_three" />
            </div>
          </LazyLoad>

          <div className="card_description_wrapper">
            <h2 className="card_title">Certified Translation Services</h2>
            <p className="description">
              Wika Translate provides certified translations for legal, academic,
              and official documents. Our translations are globally recognized for
              accuracy, ensuring compliance with legal standards while maintaining the
              original document’s integrity.
            </p>
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
