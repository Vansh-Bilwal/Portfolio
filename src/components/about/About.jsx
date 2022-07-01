import React from 'react';
import './about.css';
import { BiCodeAlt } from 'react-icons/bi';
import { SiCplusplus } from 'react-icons/si';
import { AiFillStar } from 'react-icons/ai';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from './../../assets/Vansh22.jpg';
const About = () => {
  return (
    <section id='about' className='section'>
      <h5>Who am I?</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        {/* <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='My Photo' />
          </div>
        </div> */}
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BiCodeAlt className='about__icon' />
              <h5>Tech Stack</h5>
              <small>MERN stack</small>
            </article>
            <article className='about__card'>
              <SiCplusplus className='about__icon' />
              <h5>C++</h5>
              <p>
                {' '}
                <small>400+ questions</small>
              </p>
              <p>
                <small className='four-star'>
                  4<AiFillStar />{' '}
                </small>
                <small>CodeChef</small>
              </p>
              <p>
                {' '}
                <small className='specialist'>Specialist </small>
                <small>Codeforces</small>
              </p>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />

              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
          </div>
          <p className='about__me__para'>
            Hi, my name is Vansh Bilwal. I am a third year student pursuing my
            B-Tech from Netaji Subhas University of technology in the department
            of COmputer Science and Engineering. I am a MERN stack developer
            with addition knowledge of HTML,CSS,Bootstrap and C++ programming. I
            am also a 4* coder at Codechef and a pupil at Codeforces.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
