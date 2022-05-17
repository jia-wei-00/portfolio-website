import React, { useRef } from "react";
import styled from "styled-components";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    await toast.promise(
      emailjs
        .sendForm(
          "service_altpp9t",
          "template_icep27l",
          form.current,
          "uLGAa7lNHpoKmGu0q"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        ),
      {
        pending: "Loading... Please wait",
        success: "Success 👌",
        error: "Error occur 🤯",
        theme: "dark",
      }
    );
  };

  return (
    <section id="contact">
      <Flip left>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </Flip>

      <ContactContainer className="container">
        <ContactOptions>
          <Fade left>
            <ContactOption>
              <MdOutlineEmail />
              <h4>Email</h4>
              <h5>leongjw98@gmail.com</h5>
              <a href="mailto:leongjw98@gmail.com">Send a message</a>
            </ContactOption>
          </Fade>
          <Fade left delay={100}>
            <ContactOption>
              <RiMessengerLine />
              <h4>Messenger</h4>
              <h5>Jia Wei</h5>
              <a href="https://m.me/weijia.leong" target="_blank">
                Send a message
              </a>
            </ContactOption>
          </Fade>
          <Fade left delay={200}>
            <ContactOption>
              <BsWhatsapp />
              <h4>WhatsApp</h4>
              <h5>017-5570915</h5>
              <a
                href="https://api.whatsapp.com/send?phone=60175570915"
                target="_blank"
              >
                Send a message
              </a>
            </ContactOption>
          </Fade>
        </ContactOptions>
        {/* END OF CONTACT */}

        <form ref={form} onSubmit={sendEmail}>
          <Fade right>
            <input type="text" name="name" placeholder="Your Full Name"></input>
            <input type="email" name="email" placeholder="Your Email"></input>
            <textarea
              name="message"
              row="7"
              placeholder="Your Message"
            ></textarea>
          </Fade>
          <Fade right delay={100}>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </Fade>
        </form>
      </ContactContainer>
      <ToastContainer theme="dark" />
    </section>
  );
};

export default Contact;

const ContactContainer = styled.div`
  width: 58%;
  display: grid;
  grid-template-columns: 30% 58%;
  gap: 12%;

  & > form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    & > input,
    textarea {
      width: 100%;
      padding: 1.5rem;
      border-radius: 0.5rem;
      background: transparent;
      border: 2px solid var(--color-primary-variant);
      resize: none;
      color: var(--color-white);
    }
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media screen and (max-width: 600px) {
    width: var(--container-width-sm);
  }
`;

const ContactOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ContactOption = styled.article`
  background: var(--color-bg-variant);
  padding: 1.2rem;
  border-radius: 1.2rem;
  text-align: center;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
  }

  & > :first-child {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  & > a {
    margin-top: 0.7rem;
    display: inline-block;
    font-size: 0.8rem;
  }

  & > h5 {
    color: var(--color-light);
  }
`;
