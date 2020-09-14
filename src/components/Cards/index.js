import React from "react";

// Components
import { CardItem } from "../CardItem";

// Styles
import { CardsContainer } from "./styles";

export const Cards = () => {
  return (
    <CardsContainer>
      <CardItem title1="Digital" title2="transformation" />
      <CardItem title1="App" title2="Development" />
      <CardItem title1="UI/UX" title2="Design" />
      <CardItem title1="Web" title2="Development" />
      <CardItem title1="Growth" title2="Marketing" />
    </CardsContainer>
  );
};
