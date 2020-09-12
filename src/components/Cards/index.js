import React from "react";

// Components
import { CardItem } from "../CardItem";

// Styles
import { CardsContainer } from "./styles";

export const Cards = () => {
  return (
    <CardsContainer>
      <CardItem title="Digital transformation" />
      <CardItem title="App Development" />
    </CardsContainer>
  );
};
