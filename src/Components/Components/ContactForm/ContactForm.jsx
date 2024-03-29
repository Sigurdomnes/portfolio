import './ContactForm.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

function ContactForm({ contactFormIsActive, setContactFormIsActive }) {
    const form = useRef();
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    const [resultMessage, setResultMessage] = useState(null);
    const [count, setCount] = useState(0);

    const sendEmail = (e) => {
        e.preventDefault();
        setFormIsSubmitted(true);
        setResultMessage(null);

        if (count > 2)
            setResultMessage('The service seems to be down. Email address shown below.')
        else if (!formIsSubmitted) {
            emailjs.sendForm('service_ikjlqkf', 'template_zn9b8a9', form.current, 'N5CXGOnYP5lCrPu6m')
                .then((result) => {
                    console.log(result.text);
                    form.current.reset();
                    setResultMessage("Success! Thanks for your message!");
                }, (error) => {
                    console.log(error.text);
                    setFormIsSubmitted(false);
                    setResultMessage('Something went wrong. Try again.')
                    setCount(count + 1);
                });
        };
    };
    return (
        <div className={`contact-form-wrapper ${contactFormIsActive ? "active" : "inactive"}`}>
            <div className='contact-form-blocker' onClick={() => { setContactFormIsActive(false) }}></div>
            <div className='contact-form-container'>
                <button className='contact-form-btn-close' onClick={() => { setContactFormIsActive(false) }}>
                    <FontAwesomeIcon icon="fas fa-times" />
                </button>
                <h1 className='contact-form-header'>Contact me</h1>
                <form ref={form} onSubmit={sendEmail} className='contact-form'>
                    <div className='contact-form-section'>
                        <input type="text" name="user_firstname" className='contact-form-input' placeholder="First name" required></input>
                        <input type="text" name="user_lastname" className='contact-form-input' placeholder="Last name" required></input>
                    </div>
                    <div className='contact-form-section'>
                        <input type="email" name="user_email" className='contact-form-input' placeholder="Email" required></input>
                        <input type="tel" name="user_phone" className='contact-form-input' placeholder="Phone (optional)"></input>
                    </div>
                    <input type="text" name="subject" className='contact-form-input subject' placeholder='Subject' required></input>
                    <textarea name="message" className='contact-form-message' placeholder="Your message.." required></textarea>
                    {!formIsSubmitted && <input type="submit" className='contact-form-submit-btn' value="Send"></input>}
                    {formIsSubmitted && resultMessage === null && <span class="loader"></span>}
                    {resultMessage !== null && <p className="form-result">{resultMessage}</p>}
                </form>
                <span className='contact-form-text'>
                    <p>0178, Oslo</p>
                    <p>Norway</p>
                    <a className='contact-form-link' href="mailto: sigurdomnes@gmail.com">contact@sigurdomnes.com</a>
                    <p className='contact-form-signature'>Sigurd Omnes &#169; 2023</p>
                </span>
            </div>
        </div>
    )
}

export default ContactForm