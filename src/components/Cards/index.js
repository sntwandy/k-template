import React from "react";

// Components
import { CardItem } from "../CardItem";

// Styles
import { Span } from "./styles";

export const Cards = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <CardItem
            title="Digital transformation"
            description="Lorem ipsm sjd ada sdnafd efnewfnwe fwefnef efjsfnsejkln, ipsm sjd ada sdnafd efnewfnwe fwefnef efjsfnsejkln, DT."
          />
        </div>
        <div className="carousel-item">
          <CardItem
            title="App Development"
            description="Lorem ipsm sjd ada sdnafd efnewfnwe fwefnef efjsfnsejkln, ipsm sjd ada sdnafd efnewfnwe fwefnef efjsfnsejkln. APP DEV."
          />
        </div>
        <div className="carousel-item">
          <CardItem
            title="Web Development"
            description="Lorem ipsm sjd ada sdnafd efnewfnwe fwefnef efjsfnsejkln, ipsm sjd ada sdnafd efnewfnwe fwefnef efjsfnsejkln. WEB DEV."
          />
        </div>
        <div className="carousel-item">
          <CardItem
            title="UX/UI Design"
            description="Lorem ipsm sjd ada sdnafd efnewfnwe fwefnef efjsfnsejkln, ipsm sjd ada sdnafd efnewfnwe fwefnef efjsfnsejkln. UX/UI DES."
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      ></a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <Span className="carousel-control-next-icon" aria-hidden="true"></Span>
      </a>
    </div>
  );
};
