import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/images/carrousel1.jpg",
  "/images/carrousel2.jpg",
  "/images/carrousel3.jpg",
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div style={{ borderRadius: '8px', overflow: 'hidden' }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            style={{ width: '100%', display: 'block' }}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
