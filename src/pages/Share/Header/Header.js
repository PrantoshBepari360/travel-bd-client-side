import React from 'react';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
    </div>
  );
};

export default Header;