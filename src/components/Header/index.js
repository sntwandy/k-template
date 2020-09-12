import React from "react";

// Assets
import { BurguerMenu } from "../BurguerMenu";

// Styled
import { Nav, ImgWrapper, Img, List, ListItem } from "./styles";

export const Header = () => {
  return (
    <Nav>
      <ImgWrapper>
        <Img
          src="https://res.cloudinary.com/dh9cghj6y/image/upload/v1599885654/ewgxrvnpcso5aytebf0k.png"
          alt="Kemus Logo"
        />
      </ImgWrapper>
      <List>
        <BurguerMenu />
        <ListItem>About</ListItem>
        <ListItem>Services</ListItem>
        <ListItem>Process</ListItem>
        <ListItem>Contact</ListItem>
      </List>
    </Nav>
  );
};
