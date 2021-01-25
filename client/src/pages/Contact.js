import React, { useState, useEffect } from "react";
import { validateEmail } from '../utils/helpers';
import emailjs from 'emailjs-com';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [errorMessage, setErrorMessage] = useState('');
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;

  function handleChange(event) {
    if (event.target.name === 'email') {
      const isValid = validateEmail(event.target.value);
      // console.log(isValid);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value })
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    emailjs.sendForm('service_xbl8m76', 'template_91xqatp', event.target, 'user_3QlmspmFC6ohkE8C94IEp')
      .then((result) => {
        // console.log(result.text);
      }, (error) => {
        console.log(error.text);
      })
      .then(() => {
        setErrorMessage('Message sent successfully!');
        setTimeout(function () { setErrorMessage(''); }, 3000);
      })
      .then(() => {
        event.target.querySelector("input[name='name'").value = "";
        event.target.querySelector("input[name='email'").value = "";
        event.target.querySelector("textarea[name='message'").value = "";
      });
  }

  return (
    <div style={ {
       minHeight: "100vh" ,
       margin:"3rem auto"
    } }>
      <main id="contact" style={ {
       width: "50%" ,
       margin:"3rem auto"
    } }>
        <section className="container">
          <h1>Contact Us</h1>
        </section>

        <section id="contacts" className="container">
          <form id="contact-form" onSubmit={ handleSubmit }>
            <div>
              
              <input type="text" name="name" placeholder=" Name" defaultValue={ name } onBlur={ handleChange } />
            </div>
            <div>
              <input type="email" name="email" autoComplete="email" className="validate" placeholder="Email address" defaultValue={ email } onBlur={ handleChange } />
            </div>
            <div>
              <textarea id="message-input" type="text" name="message" rows="5" placeholder="Please type your message here" defaultValue={ message } onBlur={ handleChange } />
            </div>
            <button id="contact-submit" type="submit" value="send">Send</button>
            { errorMessage && (
              <div>
                <p id="contact-form-error-message">{ errorMessage }</p>
              </div>
            ) }
          </form>
        </section>
      </main>
    </div>
  );
};

export default Contact;
