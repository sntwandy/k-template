import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 400px;
  background-color: #fff;
  height: 250px;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  box-shadow: 5px 5px 14px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 550px) {
    width: 300px;
    height: 230px;
  }
`;

export const Circle = styled.div`
  width: 200px;
  height: 200px;
  background-color: #f1f1f1;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  @media screen and (max-width: 550px) {
    width: 130px;
    height: 130px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 550px;
  height: 350px;
  position: absolute;
  @media screen and (max-width: 550px) {
    width: 350px;
    height: 350px;
  }
`;

export const Title = styled.span`
  font-size: 1.5em;
  font-weight: 700;
  margin: 10px;
  text-transform: uppercase;
`;
