import React, { useState } from 'react';
import './styles/carousel.css'; // Import CSS styles

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    {
      id: 1,
      imgSrc: 'image1.jpg',
      description: 'Description for Image 1',
      link: '#',
    },
    {
      id: 2,
      imgSrc: 'image2.jpg',
      description: 'Description for Image 2',
      link: '#',
    },
    {
      id: 3,
      imgSrc: 'image3.jpg',
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
      <div className="carousel">
        {carouselItems.map((item) => (
          <div
            key={item.id}
            className={`carousel-item ${item.id - 1 === currentIndex ? 'active' : ''}`}
          >
            <img src={item.imgSrc} alt={item.description} />
            <div className="description">{item.description}</div>
            <a href={item.link} className="see_more">
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
