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
            <p className="description">Interpretation Equipment Rental</p>
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
            <p className="description">Interpretation Equipment Rental</p>
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
