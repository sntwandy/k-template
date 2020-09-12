import React from "react";

// Styles
import { CardWrapper, Container, Circle, Title } from "./styles";

export const CardItem = ({ title }) => {
  return (
    <Container>
      <CardWrapper>
        <Title>{title}</Title>
      </CardWrapper>
      <Circle />
    </Container>
  );
};
