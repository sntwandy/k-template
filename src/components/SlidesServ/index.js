import React from "react";

// Components
import { SlideServItem } from "../SlideServItem";

// Styles
import { Span } from "./styles";

export const SlidesServ = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <SlideServItem
            title="Digital transformation"
            description="Lorem ipsm sjd ada sdnafd efnewfnwe fwefnef efjsfnsejkln, ipsm sjd ada sdnafd efnewfnwe fwefnef efjsfnsejkln, DT."
          />
        </div>
        <div className="carousel-item">
          <SlideServItem
            title="App Development"
            description="Lorem ipsm sjd ada sdnafd efnewfnwe fwefnef efjsfnsejkln, ipsm sjd ada sdnafd efnewfnwe fwefnef efjsfnsejkln. APP DEV."
          />
        </div>
        <div className="carousel-item">
          <SlideServItem
            title="Web Development"
            description="Lorem ipsm sjd ada sdnafd efnewfnwe fwefnef efjsfnsejkln, ipsm sjd ada sdnafd efnewfnwe fwefnef efjsfnsejkln. WEB DEV."
          />
        </div>
        <div className="carousel-item">
          <SlideServItem
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
