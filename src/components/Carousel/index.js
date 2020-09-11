import React from "react";

// Components
import { CarouselItem } from "../CarouselItem";

// Styles
import {
  CarouselContainer,
  ItemsWrapper,
  Item,
  Anchor,
  Li,
  Ol,
} from "./styles";

export const Carousel = () => {
  return (
    <CarouselContainer
      id="carouselExampleCaptions"
      className="carousel slide"
      data-ride="carousel"
    >
      <Ol className="carousel-indicators">
        <Li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          className="active"
        ></Li>
        <Li data-target="#carouselExampleCaptions" data-slide-to="1"></Li>
        <Li data-target="#carouselExampleCaptions" data-slide-to="2"></Li>
      </Ol>
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
      ></Anchor>
      <Anchor
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      ></Anchor>
    </CarouselContainer>
  );
};
