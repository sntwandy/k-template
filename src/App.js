import React from "react";

// Components
import { Main } from "./components/Main";
import { Services } from "./components/Services";

// Global styles
import { GlobalStyles } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Main />
      <Services />
    </>
  );
};
