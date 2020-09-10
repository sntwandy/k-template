import React from "react";

// Components
import { CarouselItem } from "../CarouselItem";

// Styles
import { CarouselContainer, ItemsWrapper, Item, Anchor } from "./styles";

export const Carousel = () => {
  return (
    <CarouselContainer
      id="carouselExampleCaptions"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>
      <ItemsWrapper className="carousel-inner">
        <Item className="carousel-item active">
          <CarouselItem paragraph="Lorem ipsum dolor sit amet, consectetur adipsicing elit, sed do eiusmod tempor 1" />
        </Item>
        <Item className="carousel-item">
          <CarouselItem paragraph="Lorem ipsum dolor sit amet, consectetur adipsicing elit, sed do eiusmod tempor 2" />
        </Item>
        <Item className="carousel-item">
          <CarouselItem paragraph="Lorem ipsum dolor sit amet, consectetur adipsicing elit, sed do eiusmod tempor 3" />
        </Item>
      </ItemsWrapper>
      <Anchor
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </Anchor>
      <Anchor
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </Anchor>
    </CarouselContainer>
  );
};
