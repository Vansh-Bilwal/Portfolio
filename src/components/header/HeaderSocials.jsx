import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { SiCodechef } from 'react-icons/si';
import { SiLeetcode } from 'react-icons/si';
import { FaGithubSquare } from 'react-icons/fa';
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.linkedin.com/in/vansh-bilwal-170807201'
        target='_blank'
      >
        <BsLinkedin />
      </a>
      <a href='https://github.com/Vansh-Bilwal' target='_blank'>
        <FaGithubSquare />
      </a>
      <a href='https://leetcode.com/Vansh_Bilwal' target='_blank'>
        <SiLeetcode />
      </a>
      <a href='https://www.codechef.com/users/vansh_bilwal' target='_blank'>
        <SiCodechef />
      </a>
    </div>
  );
};

export default HeaderSocials;
