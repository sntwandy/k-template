import React, { useState, useEffect } from "react";

// Styles
import { Svg, BtnLink, DivDropDown } from "./styles";

export const BurguerMenu = (props) => {
  return (
    <div className="dropdown">
      <BtnLink
        className="dropdown-toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <Svg viewBox="0 0 24 24" width={48} height={48} {...props}>
          <path d="M0 11h24v2H0zm0-9h24v2H0zm0 18h24v2H0z" />
        </Svg>
      </BtnLink>

      <DivDropDown className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a className="dropdown-item" href="#">
          About
        </a>
        <a className="dropdown-item" href="#">
          Services
        </a>
        <a className="dropdown-item" href="#">
          Process
        </a>
        <a className="dropdown-item" href="#">
          Contact
        </a>
      </DivDropDown>
    </div>
  );
};
