import React from "react";

// Styles
import { Wrapper, Title, TitleWrapper } from "./styles";

export const CardItem = ({ title1, title2 }) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{title1}</Title>
        <Title>{title2}</Title>
      </TitleWrapper>
    </Wrapper>
  );
};
