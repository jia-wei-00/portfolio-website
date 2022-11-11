import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaDiscord, FaSteam, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <a href="#">Jia Wei</a>

      <Permalinks>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </Permalinks>

      <Socials>
        <a href="https://www.facebook.com/weijia.leong/" target="_blank">
          <FaFacebookF />
        </a>
        <a
          href="https://steamcommunity.com/profiles/76561198365451053/"
          target="_blank"
        >
          <FaSteam />
        </a>
        <a
          href="http://discordapp.com/users/399486790483968012"
          target="_blank"
        >
          <FaDiscord />
        </a>
        <a href="https://www.linkedin.com/in/leong-jia-wei-" target="_blank">
          <FaLinkedinIn />
        </a>
      </Socials>

      <Copyright>
        <small>&copy; LEONG JIA WEI. All right reserved.</small>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: var(--color-primary);
  padding: 3rem 0;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 7rem;

  a {
    color: var(--color-bg);
  }

  & > :first-child {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
    display: inline-block;
  }
`;

const Permalinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto 3rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;
  }

  @media screen and (max-width: 600px) {
  }
`;

const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;

  & > a {
    background: var(--color-bg);
    color: var(--color-white);
    padding: 0.8rem;
    border-radius: 0.7rem;
    display: flex;
    border: 1px solid transparent;

    &:hover {
      background: transparent;
      color: var(--color-bg);
      border-color: var(--color-bg);
    }
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 2.6rem;
  }

  @media screen and (max-width: 600px) {
  }
`;

const Copyright = styled.div`
  margin-bottom: 4rem;
  color: var(--color-bg);
`;
