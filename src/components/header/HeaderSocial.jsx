import React from "react";
import styled from "styled-components";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <HeadSocial>
      <a href="https://linkedin.com/in/leong-jia-wei-6494a7214" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/jia-wei-00" target="_blank">
        <FaGithub />
      </a>
    </HeadSocial>
  );
};

export default HeaderSocial;

const HeadSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  left: 0;
  bottom: 3rem;

  &::after {
    content: "";
    width: 1px;
    height: 2rem;
    background: var(--color-primary);
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
