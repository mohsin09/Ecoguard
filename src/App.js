// src/App.js

import React from 'react';
import ThemeComponent from './ThemeComponent';
import Header from './components/Header';
import BannerSlider from './components/BannerSlider';
import Banner2 from './components/Banner2';
import Products from './components/Products';
import ArticleBanner from './components/ArticleBanner';
import BannerAnimation from './components/BannerAnimation';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <BannerSlider />
      <Banner2 />
      <Products />
      <ArticleBanner />
      <BannerAnimation />
      <Footer />
      
    </div>
  );
};

export default App;
