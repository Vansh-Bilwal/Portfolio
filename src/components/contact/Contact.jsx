import React from 'react';
import './contact.css';
import { SiGmail } from 'react-icons/si';
import { SiMessenger } from 'react-icons/si';
import { SiWhatsapp } from 'react-icons/si';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_65oh9xc',
      'template_j0eyycr',
      form.current,
      'qg2Dg6aGz2TONk7io'
    );
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact-options'>
          <article className='contact__option'>
            <SiGmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>bilwal.vansh2002@gmail.com</h5>
            <a target='_blank' href='mailto:bilwal.vansh2002@gmail.com'>
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <SiMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Vansh Bilwal</h5>
            <a href='https://m.me/vansh.bilwal' target='_blank'>
              Send a message
            </a>
          </article>
          <article className='contact__option'>
            <SiWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+91 8920841949</h5>
            <a href='https://wa.me/+918920841949' target='_blank'>
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Name' required />
          <input type='email' name='email' placeholder='Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Message'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
