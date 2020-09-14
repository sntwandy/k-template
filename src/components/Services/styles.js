import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 800px) {
    height: auto;
  }
`;

export const DivWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 100vw;
  height: 60%;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: end;
  }
`;

export const ContentTitle = styled.div`
  margin-top: 80px;
  width: 40%;
  height: 80%;
  background-image: url("https://res.cloudinary.com/dh9cghj6y/image/upload/v1599882099/obxfl31ckvquv8csjlnb.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media screen and (max-width: 800px) {
    background-image: none;
    height: auto;
    margin-bottom: 25px;
    width: 100%;
    margin-top: 20px;
  }
`;

export const ContentCards = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: 100%;
  margin-left: 15px;
  @media screen and (max-width: 800px) {
    height: auto;
    width: 100%;
    padding: 0px 10px;
  }
`;

export const Title = styled.h2`
  font-size: 3.2em;
  font-weight: 900;
  margin-left: 20px;
  @media screen and (max-width: 500px) {
    font-size: 2em;
  }
`;
