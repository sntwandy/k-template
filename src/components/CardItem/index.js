import React from "react";

// Styles
import { Button, Title, Paragraph, List } from "./styles";

export const CardItem = ({ title, description }) => {
  return (
    <>
      <Title>{title}</Title>
      <Paragraph>{description}</Paragraph>
      <List>
        <li>1 Something here</li>
        <li>2 Something here</li>
        <li>3 Something here</li>
      </List>
      <Button>Call to action</Button>
    </>
  );
};
