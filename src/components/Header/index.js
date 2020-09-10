import React from "react";

// Assets
import Logo from "../../assets/k-logo.png";
import { BurguerMenu } from "../BurguerMenu";

// Styled
import { Nav, ImgWrapper, Img, List, ListItem } from "./styles";

export const Header = () => {
  return (
    <Nav>
      <ImgWrapper>
        <Img src={Logo} alt="Kemus Logo" />
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
