import { useForm, ValidationError } from '@formspree/react';
import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const [state, handleSubmit] = useForm("mgebyynj");
   
    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get In Touch</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let's talk about everything!</h3>
                    <p className="contact__details">
                        Send me an email. 👋
                    </p>
                </div>

                {state.succeeded ? (
                   <div className='success'>  <p>Successfully sent email.</p></div>
                ) : (
                    <form onSubmit={handleSubmit} className="contact__form">
                        <div className="contact__form-group">
                            <div className="contact__form-div">
                                <input
                                    className="contact__form-input"
                                    placeholder="Insert your name"
                                    id="text"
                                    required type="text" 
                                    name="text"
                                />
                                <ValidationError 
                                    prefix="Text" 
                                    field="text"
                                    errors={state.errors}
                                />
                            </div>

                            <div className="contact__form-div">
                                <input
                                    className="contact__form-input"
                                    placeholder="Insert your email"
                                    id="email"
                                    required type="email" 
                                    name="email"
                                />
                                <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                        </div>

                        <div className="contact__form-div">
                            <input
                                className="contact__form-input"
                                placeholder="Insert your subject"
                                id="subject" 
                                required type="text"  
                                name="subject"
                            />
                            <ValidationError 
                                prefix="Subject" 
                                field="subject"
                                errors={state.errors}
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <textarea
                                id="message"
                                name="message"
                                cols="30"
                                rows="10"
                                required type="text" 
                                className="contact__form-input"
                                placeholder="Write your message" 
                            />
                            <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={state.errors}
                            />
                        </div>

                        <button type="submit" disabled={state.submitting || state.succeeded} className="btn">
                            Send Message
                        </button>
                    </form>
                )}
                
            </div>
        </section>
    );
};

export default Contact;
