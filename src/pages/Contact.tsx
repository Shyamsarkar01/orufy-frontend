import axios from "axios";
import { useState } from "react";

import "./Contact.css";

function Contact() {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [message, setMessage] =
    useState("");

  const handleSubmit = async (
    e: any
  ) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/contact",
        {
          name,
          email,
          message
        }
      );

      alert("Message Sent");

      setName("");
      setEmail("");
      setMessage("");

    } catch (error) {

      console.log(error);

      alert("Error");
    }
  };

  return (

    <section className="contact">

      <div className="contact-container">

        <h1>
          Contact Us
        </h1>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <textarea
            rows={6}
            placeholder="Your Message"
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
          />

          <button type="submit">

            Send Message

          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;