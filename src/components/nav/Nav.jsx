import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { FaFileCode } from 'react-icons/fa';
import { AiOutlineMessage } from 'react-icons/ai';
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a
        href='#'
        className={activeNav == '#' ? 'active' : ''}
        onClick={() => setActiveNav('#')}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        className={activeNav == 'about' ? 'active' : ''}
        onClick={() => setActiveNav('about')}
      >
        <AiOutlineUser />
      </a>
      <a
        href='#experience'
        className={activeNav == 'experience' ? 'active' : ''}
        onClick={() => setActiveNav('experience')}
      >
        <BiBook />
      </a>
      <a
        href='#portfolio'
        className={activeNav == 'portfolio' ? 'active' : ''}
        onClick={() => setActiveNav('portfolio')}
      >
        <FaFileCode />
      </a>
      <a
        href='#contact'
        className={activeNav == 'contact' ? 'active' : ''}
        onClick={() => setActiveNav('contact')}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
