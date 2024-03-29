import React from "react";
import profile from "../assets/cartoon.png";
import styled from "styled-components";
import { animated } from "react-spring";
import Tilt from "react-parallax-tilt";

const Container = styled(animated.div)`
  background: linear-gradient(var(--color-primary), transparent);
  width: 22rem;
  height: 40rem;
  position: absolute;
  left: calc(50% - 11rem);
  margin-top: 4rem;
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
  padding: 5.5rem 1.5rem 1.5rem 1.5rem;
`;

const StyledImg = styled.img`
  width: 200px;
  height: auto;
  margin: 3rem auto 0;
  border: 2px solid #000;
  border-radius: 50%;
`;

const StyledH1 = styled.h1`
  line-height: 1.5;
  letter-spacing: 1.5;
  font-size: 40px;
  font-family: "Gilroy";
`;

const GlassCard = () => {
  return (
    <Container>
      <Tilt>
        <StyledImg src={profile} />
        <StyledH1>Leong Jia Wei</StyledH1>
      </Tilt>
    </Container>
  );
};

export default GlassCard;
