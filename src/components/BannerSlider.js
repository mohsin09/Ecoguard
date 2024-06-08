import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/BannerSlider.css'; 

function BannerSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/banner1.jpg"
          alt="First slide"
        />
 

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/banner2.jpg"
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/assets/banner3.jpg"
          alt="Third slide"
        />
      
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerSlider;
