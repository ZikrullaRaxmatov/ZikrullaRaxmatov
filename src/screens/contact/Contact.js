import React from 'react';
import './Contact.css'

function Contact() {
    return (
        <div class="contact" id='contact'>
            <div class="container">
                <div class="contact-items">
                    <div class="contact-items-info">
                        <h2 class="contact-title">Contact Me</h2>
                        <p class="contact-text">Have a question or want to work together?</p>
                        <h3 class="contact-tie">|</h3>
                    </div>
                </div>
                <div class="raw contact-filed">
                    <div class="col-4 ">
                        <div class="contact-card">
                            <div class="contact-card-address">
                                <i class="fa-solid fa-location-dot contact-card-icon"></i>
                                <h5>Address</h5>
                                <p class="contact-card-text">Pyonatek, South Korea</p>
                            </div>
                            <div class="contact-card-email">
                                <i class="fa-solid fa-envelope contact-card-icon mt-2"></i>
                                <h5>Email</h5>
                                <p class="contact-card-text">zikrullarakhmatov@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-8">
                        <div class="contact-form">
                            <div class="col-6 contact-form-name">
                                <input type="text" class="form-control" placeholder='Name *' required />
                            </div>
                            <div class="col-6 contact-form-email">
                                <input type="email" class="form-control" placeholder='Email *' required />
                            </div>
                        </div>
                        <div class="contact-form-message">
                            <textarea type="password" class="form-control" placeholder='Write your message here ' />
                        </div>
                        <div class="contact-form-btn ">
                            <button type="submit" class="btn btn-primary rounded-pill w-100"><i class="fa-solid fa-paper-plane contact-form-btn-icon"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;