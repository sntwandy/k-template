import React from "react";

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
        <Img
          src="https://res.cloudinary.com/dh9cghj6y/image/upload/v1599885628/gzhbnqyrrxnggkfo1q5d.png"
          alt="Nothing here"
        />
      </ImgWrapper>
    </ItemWrapper>
  );
};
