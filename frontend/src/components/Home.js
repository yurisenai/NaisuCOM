import React from 'react';
import Navbar from './Navbar';
import FeaturedItems from './FeaturedItems';
import NavigationPanels from './NavigationPanels';
import FooterNav from './FooterNav';
import './styles/Home.css';
import headerImage from './assets/Arutera_Hero.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-image-container">
        <img src={headerImage} alt="Header Art" className="header-image"/>
        <h1>Create Better, Beautiful Art Fast and Efficiently with NaisuXpress</h1>
      </div>
      <FeaturedItems/>
      <NavigationPanels/>
      <FooterNav/>
    </div>
  );
};

export default Home;
