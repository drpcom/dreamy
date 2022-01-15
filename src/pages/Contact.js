import React from 'react'
import Banner from '../components/Banner';

const Contact = () => {
    return (
        <>
        <Banner name="Contact" link="/contact" />
        <div>
            <h1>Form</h1>
            <h3>Send email to: </h3>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="email address" />
            <input type="text" placeholder="message" />
            <button>submit</button>
        </div>
        </>
    )
}

export default Contact;