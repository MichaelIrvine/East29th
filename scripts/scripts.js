console.log(
  'East 29th Store - Developed by Michael Irvine - https://michaelirvinedesign.ca | Designed by ZAK - https://wearezak.com/'
);
// Header Fixed Nav
import fixedHeader from './fixedHeader';
// Header Drawer Functionality
import drawer from './drawer';
// Observer for fading in elements
// import fades from './fades';
// Product Pages
import accordion from './accordion';
import commentSwiper from './comments';
import ingredientDrawer from './ingredientDrawer';
// About Page
import fixedSubNav from './fixedSubNav';
import anchorLinks from './anchorLinks';
import productSwiper from './productSlider';

if (window.location.pathname === '/products/vital-serum') {
  accordion();
  commentSwiper();
  ingredientDrawer();
  productSwiper();
}

if (window.location.pathname === '/pages/about') {
  fixedSubNav();
  anchorLinks();
}

fixedHeader();
drawer();
