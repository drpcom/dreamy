import React from 'react'
import Banner from '../components/Banner';
import './Contact.css';

const Contact = () => {
    return (
        <>
        <Banner name="Contact" link="/contact" />
        <div className="contact-container">
            <h1 className="contact-title">Contact</h1>
            <form className="contact-form" action="https://formsubmit.co/9d70438d86c0a72bcdc3641c48d05f35" method="POST">
                <input type="hidden" name="_subject" value="New submission!"></input>
                <input type="email" name="email" placeholder="Email Address" required className="contact-email"></input>
                <textarea name="message" placeholder="Your message here." required className="contact-text"></textarea>
                <button type="submit" className="contact-send">Send</button>
            </form>
        </div>
        </>
    )
}

export default Contact;