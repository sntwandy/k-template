import React from "react";

// Assets
import Image from "../../assets/Carousel-Img.png";

// Styles
import {
  ItemWrapper,
  Content,
  Pharagraph,
  Button,
  Span,
  ImgWrapper,
  Img,
} from "./styles";

export const CarouselItem = ({ paragraph }) => {
  return (
    <ItemWrapper>
      <Content>
        <Pharagraph>{paragraph}</Pharagraph>
        <Button>Call to action</Button>
        <Span>Conoce nuestros servicios</Span>
      </Content>
      <ImgWrapper>
        <Img src={Image} alt="Nothing here" />
      </ImgWrapper>
    </ItemWrapper>
  );
};
