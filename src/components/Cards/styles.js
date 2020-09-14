import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
