import React from "react";
import emailjs from "emailjs-com";

export function Form() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "personal_email",
        "personal_contact_form",
        e.target,
        "user_R6w1uubbRrlC76ohRUKHA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <form className="form personal-contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact-number" className="form__input" />

      <input
        type="text"
        name="contact_name"
        className="form__input"
        required
        placeholder="Name"
        id="contact_name"
      />
      <label for="name" className="form__label">
        Name
      </label>

      <input
        type="email"
        name="contact_email"
        className="form__input"
        required
        placeholder="Email"
        id="email"
      />
      <label for="email" className="form__label">
        Email
      </label>

    
      <textarea name="message" className="form__message form__input" required placeholder="Message"></textarea>
      <label for="message" className="form__label">Message</label>

      <input type="submit" value="Send &rarr;" className="form__input--submit btn" />
    </form>
  );
}
