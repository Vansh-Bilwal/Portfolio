import React from 'react';
import './portfolio.css';
import IMG2 from '../../assets/CocktailDB.png';
import IMG3 from '../../assets/Kriticz.png';
import IMG4 from '../../assets/HangMan.png';
import IMG1 from '../../assets/DSM.png';
import IMG5 from '../../assets/YELP.png';
// DATA
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Social Media for Developers',
    github: 'https://github.com/Vansh-Bilwal/Dev-s_Social_Media',
    demo: 'https://developersconnect.onrender.com/',
    overlayText: 'React|Redux|Express|MongoDB',
    complete: true,
  },
  {
    id: 2,
    image: IMG2,
    title: 'Cocktail Searcher',
    github: 'https://github.com/Vansh-Bilwal/Cocktail-Search',
    demo: 'https://jolly-haibt-8c46d0.netlify.app/',
    overlayText: 'React|Redux',
    complete: true,
  },
  {
    id: 3,
    image: IMG3,
    title: 'Movies Reviews & Info',
    github: '#',
    demo: '#',
    overlayText: 'React|Redux|Express|MongoDB',
    complete: false,
  },
  {
    id: 4,
    image: IMG4,
    title: 'Word Guesser',
    github: 'https://github.com/Vansh-Bilwal/Word-Guesser',
    demo: 'https://regal-banoffee-e4221f.netlify.app/',
    overlayText: 'HTML|CSS|JavaScript',
    complete: true,
  },
  {
    id: 5,
    image: IMG5,
    title: 'Restaurants Reviews & Info',
    github: '#',
    demo: '#',
    overlayText: 'React|Express|Postgres',
    complete: false,
  },
];
const Portfolio = () => {
  return (
    <section id='portfolio' className='section'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {data.map((item) => {
          return (
            <article className='portfolio__item' key={item.id}>
              <div className='portfolio__item-image'>
                <img src={item.image} alt='' />
                <div className='dark-overlay'></div>
                <div className='overlay-text'>{item.overlayText}</div>
              </div>
              <h3>{item.title}</h3>
              {item.complete ? (
                <div className='portfolio__item-cta'>
                  <a href={item.github} className='btn' target='_blank'>
                    Github
                  </a>
                  <a
                    href={item.demo}
                    className='btn btn-primary'
                    target='_blank'
                  >
                    Live Demo
                  </a>
                </div>
              ) : (
                <small>Under Development</small>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
