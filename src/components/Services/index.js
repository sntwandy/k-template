import React from "react";

// Components
import { SlidesServ } from "../SlidesServ";
import { Cards } from "../Cards";

// Styles
import {
  Section,
  ContentTitle,
  ContentCards,
  Title,
  DivWrapper,
} from "./styles";

export const Services = () => {
  return (
    <>
      <Section>
        <DivWrapper>
          <ContentTitle>
            <Title>Services</Title>
          </ContentTitle>
          <ContentCards>
            <SlidesServ />
          </ContentCards>
        </DivWrapper>
        <Cards />
      </Section>
    </>
  );
};
