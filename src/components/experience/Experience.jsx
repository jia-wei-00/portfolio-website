import React from "react";
import styled from "styled-components";
import { BsPatchCheckFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const Experience = () => {
  return (
    <section className="scroll-margin">
      <Flip left>
        <h5>What Skills I Have</h5>
        <h2>My Skills</h2>
      </Flip>

      <ExperienceContainer className="container">
        {/* Frontend Development */}
        <Fade right>
          <ExperienceFrontend>
            <h3>Frontend Development</h3>
            <ExperienceContent>
              <ExperienceDetails>
                <BsPatchCheckFill />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </ExperienceDetails>
              <ExperienceDetails>
                <BsPatchCheckFill />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </ExperienceDetails>
              <ExperienceDetails>
                <BsPatchCheckFill />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </ExperienceDetails>
              <ExperienceDetails>
                <BsPatchCheckFill />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </ExperienceDetails>
              <ExperienceDetails>
                <BsPatchCheckFill />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </ExperienceDetails>
            </ExperienceContent>
          </ExperienceFrontend>
        </Fade>
        <Fade right delay={400}>
          {/* Backend Development */}
          <ExperienceBackend>
            <h3>Backend Development</h3>
            <ExperienceContent>
              <ExperienceDetails>
                <BsPatchCheckFill />
                <div>
                  <h4>PHP</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </ExperienceDetails>
              <ExperienceDetails>
                <BsPatchCheckFill />
                <div>
                  <h4>Node Js</h4>
                  <small className="text-light">Basic</small>
                </div>
              </ExperienceDetails>
              <ExperienceDetails>
                <BsPatchCheckFill />
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Basic</small>
                </div>
              </ExperienceDetails>
              <ExperienceDetails>
                <BsPatchCheckFill />
                <div>
                  <h4>Solidity</h4>
                  <small className="text-light">Basic</small>
                </div>
              </ExperienceDetails>
            </ExperienceContent>
          </ExperienceBackend>
        </Fade>
      </ExperienceContainer>
    </section>
  );
};

export default Experience;

const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  & > div {
    background: var(--color-bg-variant);
    padding: 2.4rem 5rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: var(--transition);

    &:hover {
      background: transparent;
      border-color: var(--color-primary-variant);
      cursor: default;
    }

    h3 {
      text-align: center;
      margin-bottom: 2rem;
      color: var(--color-primary);
    }
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;

    & > div {
      width: 80%;
      padding: 2rem;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 600px) {
    gap: 1rem;

    & > div {
      width: 100%;
      padding: 2rem 1rem;
    }
  }
`;

const ExperienceFrontend = styled.div``;

const ExperienceBackend = styled.div``;

const ExperienceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;

  @media screen and (max-width: 1024px) {
    padding: 1rem;
  }

  @media screen and (max-width: 600px) {
  }
`;

const ExperienceDetails = styled.article`
  display: flex;
  gap: 1rem;

  & > :first-child {
    margin-top: 6px;
    color: var(--color-primary);
  }
`;
