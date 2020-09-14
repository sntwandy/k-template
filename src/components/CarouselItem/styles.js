import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 30px;
  width: 50%;
  @media screen and (max-width: 600px) {
    & {
      margin: 0;
      width: 90vw;
    }
  }
`;

export const Pharagraph = styled.p`
  font-size: 3em;
  font-weight: 700;
  margin-bottom: 20px;
  @media screen and (max-width: 1000px) {
    & {
      font-size: 2.5em;
    }
  }
  @media screen and (max-width: 600px) {
    font-size: 2em;
  }
`;

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

export const Span = styled.span`
  margin-left: 20px;
`;

export const ImgWrapper = styled.div`
  width: 50%;
  @media screen and (max-width: 600px) {
    & {
      display: none;
    }
  }
`;

export const Img = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  width: 600px;
`;
