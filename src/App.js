import React from "react";

// Components
import { Header } from "./components/Header";
import { Carousel } from "./components/Carousel";

// Global styles
import { GlobalStyles } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Carousel />
    </>
  );
};
