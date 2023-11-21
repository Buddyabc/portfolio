import React from "react";
import "./contact.css";
import phone from "../Images/phone.png";
import email from "../Images/email.png";
import address from "../Images/address.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../getStripe";

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);

function Contact(props) {
  const options = {
    // passing the client secret obtained from the Stripe Dashboard
    clientSecret: process.env.STRIPE_SECRET_KEY,
  };
  const formRef = useRef();
  const serviceKey = process.env.RECT_APP_SERVICE_KEY;
  const tempKey = process.env.RECT_APP_TEMPLATE_KEY;
  const AcKey = process.env.RECT_APP_ACCOUNT_KEY;
  const [msg, setMsg] = useState("");
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm({ serviceKey }, { tempKey }, formRef.current, { AcKey })
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setMsg("We will get back to you shortly");
    setTimeout((event) => {
      setMsg("");
      event.target.reset();
    }, 3000);
  };
  return (
    <div>
      <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let's discuss your project</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={phone} alt="" className="c-icon" />
                +91 8171305841
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={email} alt="" />
                Vikranttyagi5905682@gmail.com
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={address} alt="" />
                Hastinapur,Meerut(Uttar Pradesh);
              </div>
            </div>
          </div>
          <div className="c-right">
            <h3 className="c-desc">
              <b>What's your story?</b> Get in touch. Always available for
              freelancing if the right project comes along with me.
            </h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                minLength="4"
                name="user_name"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                minLength="4"
                maxLength="20"
                name="user_subject"
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />
              <textarea
                rows="5"
                placeholder="Message"
                name="message"
                required
              />
              <button>Submit</button>
              <div id="submitMsg">{msg}</div>
            </form>
            <Elements stripe={stripePromise} options={options}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
