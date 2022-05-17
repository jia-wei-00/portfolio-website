import React from "react";
import styled from "styled-components";
import ME from "../../assets/business.png";
import { MdOutlineWork } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import { FaDumbbell } from "react-icons/fa";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const About = () => {
  return (
    <section id="about">
      <Flip bottom>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </Flip>

      <AboutContainer className="container">
        <Zoom>
          <AboutMe>
            <AboutMeImg>
              <img src={ME} alt="About Image" />
            </AboutMeImg>
          </AboutMe>
        </Zoom>

        <AboutContent>
          <Fade left>
            <AboutCards>
              <AboutCard>
                <MdOutlineWork />
                <h5>Experience</h5>
                <small>Internship Experience</small>
              </AboutCard>

              <AboutCard>
                <IoMdSchool />
                <h5>Degree</h5>
                <small>Bachelor of Science(Multimedia)</small>
              </AboutCard>

              <AboutCard>
                <FaDumbbell />
                <h5>Exercise</h5>
                <small>Enjoy Exercise</small>
              </AboutCard>
            </AboutCards>
          </Fade>
          <Fade bottom>
            <p>
              I'm a fresh graduate degree student of Universiti Utara Malaysia
              with under course Bachelor of Science with Honours (Multimedia).
              Talent for translating company vision into a suite of useful
              graphics and related designs. Motivated Web Designer adept at
              conceptualizing. Combines accepted best practices with creative
              innovation to produce beautiful and functional results.
            </p>
          </Fade>

          <Fade bottom>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </Fade>
        </AboutContent>
      </AboutContainer>
    </section>
  );
};

export default About;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
  }

  @media screen and (max-width: 600px) {
  }
`;

const AboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(
    45deg,
    transparent,
    var(--color-primary),
    transparent
  );
  display: grid;
  place-items: center;

  @media screen and (max-width: 1024px) {
    width: 50%;
    margin: 2rem auto 4rem;
  }

  @media screen and (max-width: 600px) {
    width: 65%;
    margin: 0 auto 3rem;
  }
`;

const AboutMeImg = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  transform: rotate(10deg);
  transition: var(--transition);
  min-width: 250px;

  &:hover {
    transform: rotate(0);
  }

  @media screen and (max-width: 425px) {
    min-width: unset;
  }
`;

const AboutContent = styled.div`
  & > p {
    margin: 2rem 0 2.6rem;
    color: var(--color-light);
  }

  @media screen and (max-width: 1024px) {
    & > p {
      margin: 1rem 0 1.5rem;
    }
  }

  @media screen and (max-width: 600px) {
    text-align: center;

    & > p {
      margin: 1.5rem 0;
    }
  }
`;

const AboutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

const AboutCard = styled.article`
  background: var(--color-bg-variant);
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }

  & > :nth-child(1) {
    color: var(--color-primary);
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  & > h5 {
    font-size: 0.95rem;
  }

  & > small {
    font-size: 0.7rem;
    color: var(--color-light);
  }
`;
