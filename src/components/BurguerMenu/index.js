import * as React from "react";

// Styles
import { Svg } from "./styles";

export const BurguerMenu = (props) => {
  return (
    <Svg viewBox="0 0 24 24" width={48} height={48} {...props}>
      <path d="M0 11h24v2H0zm0-9h24v2H0zm0 18h24v2H0z" />
    </Svg>
  );
};
