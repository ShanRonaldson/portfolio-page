import React from "react";
import emailjs from "emailjs-com";

export function Form() {
  const [showThanks, setShowThanks] = React.useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    await emailjs.sendForm(
      "personal_email",
      "personal_contact_form",
      e.target,
      "user_R6w1uubbRrlC76ohRUKHA"
    );

    setShowThanks(true);
  };

  return (
    <form className="form personal-contact-form" id="form" onSubmit={sendEmail}>
      {showThanks && (
        <div className="form__output" id="form__output">
          Thank you for your email!
        </div>
      )}

      <input type="hidden" name="contact-number" className="form__input" />

      <input
        type="text"
        name="user_name"
        className="form__input"
        required
        placeholder="Name"
        id="user_name"
      />
      <label htmlFor="name" className="form__label">
        Name
      </label>

      <input
        type="email"
        name="user_email"
        className="form__input"
        required
        placeholder="Email"
        id="user_email"
      />
      <label htmlFor="email" className="form__label">
        Email
      </label>

      <textarea
        name="message"
        className="form__message form__input"
        required
        placeholder="Message"
      ></textarea>
      <label htmlFor="message" className="form__label">
        Message
      </label>

      <input
        type="submit"
        value="Send &rarr;"
        className="form__input--submit btn"
      />
    </form>
  );
}
