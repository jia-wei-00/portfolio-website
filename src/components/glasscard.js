import React from "react";
import profile from "../assets/cartoon.png";
import styled from "styled-components";
import { useSpring, animated, config, to } from "react-spring";

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

const StyledH3 = styled.h3`
  line-height: 1.5;
  letter-spacing: 1.15;
  font-family: "Gilroy";
  font-size: 20px;
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const GlassCard = () => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.default,
  }));
  return (
    <Container
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: to(props.xys, trans),
      }}
    >
      <StyledImg src={profile} />
      <StyledH1>Leong Jia Wei</StyledH1>
      <small className="text-light">
        Coming together is a beginning. Keeping together is progress. Working
        together is success.
      </small>
    </Container>
  );
};

export default GlassCard;
