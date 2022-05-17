import React from "react";
import styled from "styled-components";
import CV from "../../assets/cv.pdf";

const CTA = () => {
  return (
    <Contact>
      <a href={CV} download="Leong_Jia_Wei_Resume.pdf" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </Contact>
  );
};

export default CTA;

const Contact = styled.div`
  margin-top: 2.5rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
`;
