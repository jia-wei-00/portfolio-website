import React from "react";
import styled from "styled-components";
import { BiError } from "react-icons/bi";

const PageNotFound = () => {
  return (
    <ErrorPage className="container">
      <Error>
        <div>
          <h2>404</h2>
          <div>
            <BiError />
            <h5>Page Not Found</h5>
          </div>
        </div>
      </Error>
    </ErrorPage>
  );
};

export default PageNotFound;

const ErrorPage = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  height: 100vh;
`;

const Error = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: 10rem;
  border-radius: 3rem;
  border: 2px solid transparent;
  background: linear-gradient(
    45deg,
    transparent,
    var(--color-primary),
    transparent
  );
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary);
  }

  & > div {
    margin: 2rem;

    & > h2 {
      font-size: 5rem;
    }

    & > div {
      & > :first-child {
        font-size: 3rem;
        color: #ffcc00;
      }
      & > h5 {
        font-size: 3rem;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    & > div > h2 {
      font-size: 3rem;
    }

    & > div {
      & > div > :first-child {
        font-size: 2rem;
      }
      & > div > h5 {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 600px) {
  }
`;
