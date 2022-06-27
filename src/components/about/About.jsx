import React from 'react';
import './about.css';
import { BiCodeAlt } from 'react-icons/bi';
import { SiCplusplus } from 'react-icons/si';
import { AiFillStar } from 'react-icons/ai';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from './../../assets/Vansh22.jpg';
const About = () => {
  return (
    <section id='about'>
      <h5>Who am I?</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='My Photo' />
          </div>
        </div>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            cupiditate, ex necessitatibus ut doloribus sunt officia possimus
            deleniti modi dolor amet, praesentium exercitationem nihil facilis
            repellat eos ab esse et.
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
