import React from 'react';
import './Contact.css'

export default function Contact(){
    return(
        <section id="contact" className='contact'>
            <div className='container'>
                <div className='section-title'>
                    <h2>Contact</h2>
                    <p>Thank you for reading! Please reach out with any questions or opportunities you may have. You can use the form below or click on the email links provided. If you'd like to give me a call, please be aware that I am working while I transition my career and may not pick up the phone, so please a message and I'll get right back to you.</p>
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