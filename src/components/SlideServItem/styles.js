import styled from "styled-components";

export const Button = styled.button`
  width: 250px;
  border: none;
  outline: none;
  background-color: #282828;
  border-radius: 5px;
  height: 50px;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const Title = styled.h3`
  font-size: 3em;
  font-weight: 700;
  text-transform: uppercase;
  @media screen and (max-width: 500px) {
    font-size: 2em;
  }
`;

export const Paragraph = styled.p`
  font-size: 1.5em;
  width: 80%;
  margin-top: 10px;
  margin-bottom: 15px;
`;

export const List = styled.ul`
  font-size: 1.3em;
`;
