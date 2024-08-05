import React, { useRef } from 'react';
import './footer.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const emailRef = useRef(null);

    const handleSubscribe = (e) => {
        e.preventDefault();
        alert('You have subscribed to the newsletter successfully!');
        if (emailRef.current) {
            emailRef.current.value = ''; 
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h2 className="logo-text">FinSure</h2>
                        <p>
                        Redefining the standard for digital Insurance!
                           
                        </p>
                    </div>

                    <div className="footer-section quick-links">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/claims">Claims</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/faq">FAQs</NavLink></li>
                        </ul>
                    </div>

                    <div className="footer-section subscribe">
                        <h2>Subscribe to our Newsletter</h2>
                        <form id="subscribe-form" onSubmit={handleSubscribe}>
                            <input type="email" name="email" placeholder="Enter your email" required ref={emailRef} />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2024 All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
