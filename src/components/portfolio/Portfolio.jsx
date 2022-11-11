import React from "react";
import styled from "styled-components";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import IMG7 from "../../assets/portfolio7.png";
import IMG8 from "../../assets/portfolio8.png";
import IMG9 from "../../assets/portfolio9.png";
import IMG10 from "../../assets/expense-tracker.png";
import IMG11 from "../../assets/web-resume.png";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Unity Mobile Game",
    preview: "https://jia-wei-00.github.io/Web-Resume/#/tridemic",
    demo: "https://jiawei01.itch.io/tridemic",
  },
  {
    id: 2,
    image: IMG10,
    title: "Expense Tracker",
    github: "https://github.com/jia-wei-00/expenses-tracker",
    password: "(Username: testing@gmail.com, Password: 123456)",
    demo: "https://expenses-tracker-jia-wei-00.vercel.app/home",
  },
  {
    id: 3,
    image: IMG2,
    title: "GameFi Project",
    github: "https://github.com/jia-wei-00/blockchain/",
    demo: "https://jia-wei-00.github.io/blockchain/",
  },
  {
    id: 4,
    image: IMG9,
    title: "Amazon Clone",
    github: "https://github.com/jia-wei-00/amazon-clone/",
    demo: "https://jia-wei-00.github.io/amazon-clone/",
  },
  {
    id: 5,
    image: IMG3,
    title: "Tesla Clone",
    github: "https://github.com/jia-wei-00/tesla-clone/",
    demo: "https://jia-wei-00.github.io/tesla-clone/",
  },
  {
    id: 6,
    image: IMG4,
    title: "Linkedin Clone",
    github: "https://github.com/jia-wei-00/linkedin-clone/",
    demo: "https://jia-wei-00.github.io/linkedin-clone/",
  },
  {
    id: 7,
    image: IMG11,
    title: "Personal Website",
    github: "https://github.com/jia-wei-00/react-portfolio",
    demo: "https://jia-wei-portfolio.vercel.app/",
  },
  {
    id: 8,
    image: IMG8,
    title: "Group Chat App",
    github: "https://github.com/jia-wei-00/group_chat_app/",
    demo: "https://jia-wei-00.github.io/group_chat_app/",
  },
];

const Portfolio = () => {
  return (
    <section className="scroll-margin">
      <Flip left>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
      </Flip>

      <PortfolioContainer className="container">
        <Zoom>
          {data.map((data, index) => {
            return (
              <PortfolioItem key={index}>
                <div>
                  <img src={data.image} alt="" />
                </div>
                <h3>{data.title}</h3>
                {data.password && (
                  <small className="text-light">{data.password}</small>
                )}
                <PortfolioItemCta>
                  {data.preview ? (
                    <a href={data.preview} target="_blank" className="btn">
                      Preview
                    </a>
                  ) : (
                    <a href={data.github} target="_blank" className="btn">
                      Github
                    </a>
                  )}
                  <a
                    href={data.demo}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Live Demo
                  </a>
                </PortfolioItemCta>
              </PortfolioItem>
            );
          })}
        </Zoom>
      </PortfolioContainer>
    </section>
  );
};

export default Portfolio;

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const PortfolioItem = styled.article`
  background: var(--color-bg-variant);
  padding: 1.3rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);
  height: 100%;

  &:hover {
    border-color: var(--color-primary-variant);
    background: transparent;
  }

  & > h3 {
    margin: 1.2rem 0 0;
  }

  & > :first-child {
    border-radius: 1.5rem;
    overflow: hidden;

    & > img {
      height: 250px;
    }
  }
`;

const PortfolioItemCta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  & > a {
    margin-top: 2rem;
  }
`;
