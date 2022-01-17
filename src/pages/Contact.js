import React from 'react'
import Banner from '../components/Banner';
import './Contact.css';

const Contact = () => {
    return (
        <>
        <Banner name="Contact" link="/contact" />
        <div className="boh-container">
            <h1 className="boh-title">Contact</h1>
            <form action="https://formsubmit.co/dreamy.contact.spirits@gmail.com" method="POST">
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