import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  min-width: 550px;
  height: 320px;
  margin: 10px 20px;
  background-image: url("https://i.imgur.com/WfFaGaV.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 600px) {
    min-width: 350px;
    height: 200px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Title = styled.span`
  font-size: 1.5em;
  font-weight: 700;
  margin: 0px 15px;
  text-transform: uppercase;
  @media screen and (min-width: 600px) {
    font-size: 2em;
  }
`;
