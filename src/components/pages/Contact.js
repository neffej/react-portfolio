import React from 'react';
import './Contact.css'

export default function Contact(){
    return(
        <section id="contact" className='contact'>
            <div className='container'>
                <div className='section-title'>
                    <h2>Contact</h2>
                    <p>Thank you for reading! Please reach out with any questions or opportunities you may have. You can use the form below, click on the email links provided, or give me a phone call at the number below.  </p>
                </div>
                <div className='row aos-init aos-animate' data-aos="fade-in">
                    <div className='mt-5 mt-lg-00 d-flex align-items-stretch'>
                        <form className='php-email-form'>
                            <div className='row'>
                                <div className='form-group col-md-6'>
                                    <label>Your Name</label>
                                    <input name="name" className='form-control' id="name" required>
                                    </input>                      
                                </div>
                                <div className='form-group col-md-6'>
                                    <label>Your Email</label>
                                    <input name="email" className='form-control' id="email" required>
                                    </input>                      
                                </div>
                            </div>
                            <div className='form-group'>
                                <label>Subject</label>
                                <input className="form-control" name="subject" id='subject' required></input>
                            </div>
                            <div className='form-group'>
                                <label>Message</label>
                                <textarea className='form-control' name="message" rows="10" required></textarea>
                            </div>
                            <div className='my-3'>
                                <div className='loading'>Loading</div>
                                <div className='error-message'></div>
                                <div className='sent-message'>Your message has been sent. Thanks!</div>
                            </div>
                            <div className='text-center'>
                                <button type='submit'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}