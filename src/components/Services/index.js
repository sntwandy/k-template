import React from "react";

// Components
import { Cards } from "../Cards";

// Styles
import { Section, ContentTitle, ContentCards, Title } from "./styles";

export const Services = () => {
  return (
    <Section>
      <ContentTitle>
        <Title>Services</Title>
      </ContentTitle>
      <ContentCards>
        <Cards />
      </ContentCards>
    </Section>
  );
};
