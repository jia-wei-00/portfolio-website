import React from "react";
import styled from "styled-components";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useScrollSection } from "react-scroll-section";
import Breakpoint, {
  BreakpointProvider,
  setDefaultBreakpoints,
} from "react-socks";

setDefaultBreakpoints([{ xs: 0 }, { l: 1439 }, { xl: 1440 }]);

const Nav = () => {
  const homeSection = useScrollSection("home");
  const aboutSection = useScrollSection("about");
  const skillSection = useScrollSection("skills");
  const experienceSection = useScrollSection("experience");
  const portfolioSection = useScrollSection("portfolio");

  return (
    <BreakpointProvider>
      <Breakpoint xs>
        <Navigation>
          <a
            className={homeSection.selected && "active"}
            onClick={homeSection.onClick}
          >
            <AiOutlineHome />
          </a>
          <a
            className={aboutSection.selected && "active"}
            onClick={aboutSection.onClick}
          >
            <AiOutlineUser />
          </a>
          <a
            className={skillSection.selected && "active"}
            onClick={skillSection.onClick}
          >
            <BiBook />
          </a>
          <a
            className={experienceSection.selected && "active"}
            onClick={experienceSection.onClick}
          >
            <RiServiceLine />
          </a>
          <a
            className={portfolioSection.selected && "active"}
            onClick={portfolioSection.onClick}
          >
            <BiMessageSquareDetail />
          </a>
        </Navigation>
      </Breakpoint>
    </BreakpointProvider>
  );
};

export default Nav;

const Navigation = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.7rem 1.7rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);

  & > a {
    background: transparent;
    padding: 0.9rem;
    border-radius: 50%;
    display: flex;
    color: var(--color-light);
    font-size: 1.1rem;

    &:hover {
      background: rgba(0, 0, 0, 0.2);
      color: var(--color-white);
    }

    &.active {
      background: var(--color-primary);
      color: var(--color-bg);
    }
  }
`;
