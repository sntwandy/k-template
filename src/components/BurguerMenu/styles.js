import styled from "styled-components";

export const Svg = styled.svg`
  width: 30px;
  margin-right: 10px;
  @media screen and (min-width: 650px) {
    display: none;
  }
`;

export const BtnLink = styled.a`
  background-color: #eee;
  border: none;
  color: transparent;
  &:hover {
    color: transparent;
  }
`;

export const DivDropDown = styled.div`
  top: 10px;
  left: -200px;
  font-size: 1.2em;
`;
