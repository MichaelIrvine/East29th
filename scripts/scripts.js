console.log(
  'East 29th Store - Developed by Michael Irvine - https://michaelirvinedesign.ca | Designed by ZAK - https://wearezak.com/'
);
// Header Fixed Nav
import fixedHeader from './fixedHeader';
// Header Drawer Functionality
import drawer from './drawer';
// Product Pages
import accordion from './accordion';
import commentSwiper from './comments';
import ingredientDrawer from './ingredientDrawer';

if (window.location.pathname === '/products/vital-serum') {
  accordion();
  commentSwiper();
  ingredientDrawer();
}

fixedHeader();
drawer();
