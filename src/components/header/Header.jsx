import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from './../../assets/VanshBilwal.png';
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <header id='header section-one'>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Vansh Bilwal</h1>
        <h5 className='text-light'>MERN stack Developer</h5>
        <CTA></CTA>
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='' />
        </div>
        <a href='#contact' className='scroll__down'>
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
