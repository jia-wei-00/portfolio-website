import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../header/Header";
import Fade from "react-reveal/Fade";
import Breakpoint, {
  BreakpointProvider,
  setDefaultBreakpoints,
} from "react-socks";

setDefaultBreakpoints([{ xs: 0 }, { l: 1439 }, { xl: 1440 }]);

function HeadNav() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const header = document.getElementById("myHeader");
    const sticky = header.offsetHeight;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, [sticky]);

  return (
    <>
      <BreakpointProvider>
        <Breakpoint xl>
          <Nav id="myHeader">
            <Header />
            {sticky ? null : (
              <Fade top>
                <ul>
                  <a href="#home">
                    <li>
                      <p>1</p>
                      <p>Home</p>
                    </li>
                  </a>
                  <a href="#about">
                    <li>
                      <p>2</p>
                      <p>About</p>
                    </li>
                  </a>
                  <a href="#skills">
                    <li>
                      <p>3</p>
                      <p>Skills</p>
                    </li>
                  </a>
                  <a href="#experience">
                    <li>
                      <p>4</p>
                      <p>Experience</p>
                    </li>
                  </a>
                  <a href="#portfolio">
                    <li>
                      <p>5</p>
                      <p>portfolio</p>
                    </li>
                  </a>
                </ul>
              </Fade>
            )}
          </Nav>
          {sticky && (
            <ShowNav>
              <ul>
                <a href="#home">
                  <li>
                    <p>1</p>
                    <Fade right>
                      <p>Home</p>
                    </Fade>
                  </li>
                </a>
                <a href="#about">
                  <li>
                    <p>2</p>
                    <Fade right>
                      <p>About</p>
                    </Fade>
                  </li>
                </a>
                <a href="#skills">
                  <li>
                    <p>3</p>
                    <Fade right>
                      <p>Skills</p>
                    </Fade>
                  </li>
                </a>
                <a href="#experience">
                  <li>
                    <p>4</p>
                    <Fade right>
                      <p>Experience</p>
                    </Fade>
                  </li>
                </a>
                <a href="#portfolio">
                  <li>
                    <p>5</p>
                    <Fade right>
                      <p>portfolio</p>
                    </Fade>
                  </li>
                </a>
              </ul>
            </ShowNav>
          )}
        </Breakpoint>
        <Breakpoint xs>
          <Header />
        </Breakpoint>
      </BreakpointProvider>
    </>
  );
}

export default HeadNav;

const Nav = styled.div`
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  transition: var(--transition);
  background: rgba(56, 56, 56, 0.3);
  backdrop-filter: blur(15px);

  & > ul {
    display: flex;
    width: 100%;
    justify-content: flex-end;

    & > a {
      text-decoration: none;
    }

    & > a > li {
      cursor: pointer;
      height: 100%;
      background: linear-gradient(
        130deg,
        transparent,
        var(--color-primary),
        transparent
      );
      min-width: 11rem;
      transition: var(--transition);
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & > :nth-child(2) {
        writing-mode: vertical-rl;
        transform: rotate(180deg);
      }

      & > p {
        margin: 1.5rem;
        font-size: 3rem;
        text-transform: uppercase;
      }

      &:hover {
        min-width: 35rem;
        filter: saturate(20%);
      }
    }
  }
`;

const ShowNav = styled(Nav)`
  height: 7rem;
  position: fixed;
  z-index: 999;

  & > ul {
    & > a > li {
      & > :first-child {
        opacity: 0.3;
        color: black;
      }
      & > :nth-child(2) {
        text-transform: capitalize;
        writing-mode: horizontal-tb;
        transform: unset;
        font-size: 1rem;
        position: absolute;
        margin-top: 3rem;
        color: white;
      }
    }
  }
`;
