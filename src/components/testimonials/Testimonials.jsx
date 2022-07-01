import React from 'react';
import './testimonials.css';
import P1 from '../../assets/defaultDP.png';
// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const data = [
  {
    name: 'Person 1',
    review:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero voluptatibus animi eius tempore ad magni magnam eos, rerum qui, unde numquam architecto natus, quibusdam deleniti omnis harum explicabo nihil minus.',
  },
  {
    name: 'Person 2',
    review:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero voluptatibus animi eius tempore ad magni magnam eos, rerum qui, unde numquam architecto natus, quibusdam .',
  },
  {
    name: 'Person 3',
    review:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero voluptatibus animi eius tempore ad magni magnam eos, rerum qui, unde numquam architecto natus, quibusdam deleniti omnis harum explicabo nihil minus.ibero voluptatibus animi eius tempore ad magni magnam eos, rerum qui.',
  },
  {
    name: 'Person 4',
    review:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero voluptatibus animi eius tempore ad magni magnam eos, rerum qui, unde numquam architecto natus, quibusdam deleniti omnis harum explicabo nihil minus. Libero voluptatibus animi eius tempore ad magni magnam eos, rerum qui, unde numquam architecto natus, quibusdam deleniti omnis harum explicabo nihil minus.',
  },
];
const Testimonials = () => {
  return (
    <section id='testimonials' className='section'>
      <h5>What Other's Say</h5>
      <h2>Testimonials</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className='container testimonials__container'
      >
        {data.map(({ name, review }) => {
          return (
            <SwiperSlide className='testimonial'>
              <div className='client__avatar'>
                <img src={P1} alt='' />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
