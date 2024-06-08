import React from 'react';
import '../styles/BannerAnimation.css';  // Import your custom CSS file

const BannerAnimation = () => {
  const images = [
    '/assets/image1.jpg',
    '/assets/image2.jpg',
    '/assets/image3.jpg',
    '/assets/image4.jpg',
    '/assets/image5.jpg',
    '/assets/image6.jpg',
    '/assets/image7.jpg',
    '/assets/image8.jpg',
    '/assets/image9.jpg',
    '/assets/image10.jpg',
    '/assets/image11.jpg',
    '/assets/image12.jpg',
    '/assets/image13.jpg',
    '/assets/image14.jpg',
    // Add more images if needed
  ];

  return (
    <div className="banner-container">
      <div className="scrolling-wrapper">
        {images.map((image, index) => (
          <div className="scrolling-item" key={index}>
            <img
              className="product-image"
              src={image}
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerAnimation;
