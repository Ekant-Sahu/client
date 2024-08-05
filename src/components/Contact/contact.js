import React, { useRef } from 'react';
import './contact.css';
// import { useDarkMode } from '../../Darkmode';
import emailjs from '@emailjs/browser';
import ctc1 from '../../assets/ctc1.png';
import ctc3 from '../../assets/ctc3.png';
import ctc4 from '../../assets/ctc4.png';
import ctc5 from '../../assets/ctc5.png';


const Contact = () => {
  const form = useRef();
//   const { isDarkMode } = useDarkMode();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_v5560op', 'template_cqh2l63', form.current, 'f6MOtkzVAVwSL9aru')
      .then(
        (result) => {
          console.log(result.text);
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        (error) => {
          console.error('EmailJS Error:', error);
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <div className="contact">
    <div className="txt">
      <h1 className="ctc">Contact Us!</h1>
    </div>
    <div className="contact-container">
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="your-email@example.com" required />

        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Subject" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your Message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
      <div className="image-fader">
        <img src={ctc1} alt="ctc1" />
        <img src={ctc5} alt="ctc5" />
        <img src={ctc3} alt="ctc3" />
        <img src={ctc4} alt="ctc4" />
      </div>
    </div>
  </div>
);
};

export default Contact;