import React from "react";
import styled from "styled-components";
import { BiCheck } from "react-icons/bi";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const Services = () => {
  return (
    <section className="scroll-margin">
      <Flip left>
        <h5>What I Work Before</h5>
        <h2>Working Experience</h2>
      </Flip>

      <ServicesContainer className="container">
        <Fade bottom>
          <Service>
            <ServiceHead>
              <h3>Wordpress Developer</h3>
            </ServiceHead>

            <ServiceList>
              <li>
                <BiCheck />
                <p>Build e-commerce and responsive website for SMEs</p>
              </li>
              <li>
                <BiCheck />
                <p>
                  Meeting with clients to discuss website design and function.
                </p>
              </li>
              <li>
                <BiCheck />
                <p>Designing and building the website front-end.</p>
              </li>
              <li>
                <BiCheck />
                <p>Generating WordPress themes and plugins.</p>
              </li>
              <li>
                <BiCheck />
                <p>Convert design to responsive website.</p>
              </li>
            </ServiceList>
          </Service>

          {/* END OF UI/UX */}

          <Service>
            <ServiceHead>
              <h3>Internship Junior Software Developer (2021-2022)</h3>
            </ServiceHead>

            <ServiceList>
              <li>
                <BiCheck />
                <p>
                  Involved in PHP project on frontend and backend development.
                </p>
              </li>
              <li>
                <BiCheck />
                <p>Involved in GameFi project</p>
              </li>
              <li>
                <BiCheck />
                <p>Involved in React GameFi project.</p>
              </li>
              <li>
                <BiCheck />
                <p>Involved in smart contract development.</p>
              </li>
              <li>
                <BiCheck />
                <p>PHP telegram bot development.</p>
              </li>
            </ServiceList>
          </Service>
          {/* END OF WEB DEVELOPMENT */}
        </Fade>
      </ServicesContainer>
    </section>
  );
};

export default Services;

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Service = styled.article`
  background: var(--color-bg-variant);
  border-radius: 0 0 2rem 2rem;
  border: 1px solid var(--color-primary);
  height: fit-content;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }

  @media screen and (max-width: 1024px) {
    height: auto;
  }

  @media screen and (max-width: 600px) {
  }
`;

const ServiceHead = styled.div`
  background: var(--color-primary);
  padding: 2rem;
  border-radius: 0 0 2rem 2rem;
  box-shadow: 0 2rem 1rem rgba(0, 0, 0, 0.1);

  & > h3 {
    color: var(--color-bg);
    font-size: 1rem;
    text-align: center;
  }
`;

const ServiceList = styled.ul`
  padding: 2rem;

  & > p {
    font-size: 0.9rem;
  }

  & > li {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.8rem;

    & > :first-child {
      color: var(--color-primary);
      margin-top: 2px;
      width: 3rem;
    }
  }
`;
