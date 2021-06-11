import { Form } from "../components/Form";

export function Contact() {
  return (
    <div className="contact--content margin-top-med margin-bottom-large">
      <Form />

      <div className="contact--info">
          <h3 className="contact--info__heading">
              Contact Information
          </h3>

            <p className="contact--info__para">
                Helsinki, Finland
            </p>

      </div>
    </div>
  );
}
