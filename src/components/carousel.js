import React, { useState } from 'react';
import './styles/carousel.css';

// Import images from the assets folder
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpg';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    {
      id: 1,
      imgSrc: image1,
      description: 'Description for Image 1',
      link: '#',
    },
    {
      id: 2,
      imgSrc: image2,
      description: 'Description for Image 2',
      link: '#',
    },
    {
      id: 3,
      imgSrc: image3,
      description: 'Description for Image 3',
      link: '#',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  };

  return (
    <div className="half_two_wrapper">
      <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={item.imgSrc} alt={item.description} />
            <div className="description">{item.description}</div>
            <a href={item.link} className="see-more">
              See More
            </a>
          </div>
        ))}
      </div>
      <button type="button" id="prev" className="nav-button" onClick={handlePrev}>
        Prev
      </button>
      <button type="button" id="next" className="nav-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
