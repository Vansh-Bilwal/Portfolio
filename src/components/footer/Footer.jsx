import React from 'react';
import './footer.css';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        Vansh
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Skills</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#conatact'>Contact</a>
        </li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.instagram.com/vanshbilwal' target='_blank'>
          <BsInstagram />
        </a>
        <a href='https://www.facebook.com/vansh.bilwal' target='_blank'>
          <BsFacebook />
        </a>
        <a
          href='https://www.linkedin.com/in/vansh-bilwal-170807201'
          target='_blank'
        >
          <BsLinkedin />
        </a>
        <a href='https://github.com/Vansh-Bilwal' target='_blank'>
          <FaGithubSquare />
        </a>
      </div>
      <div className='footer__copyright'>
        <small>Vansh Bilwal. All rights reserved. </small>
      </div>
    </footer>
  );
};

export default Footer;
