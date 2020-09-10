import styled from "styled-components";

export const Nav = styled.nav`
  width: 100vw;
  height: 70px;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
`;

export const ImgWrapper = styled.div`
  width: 150px;
  margin-left: 10px;
`;

export const Img = styled.img`
  width: 100%;
`;

export const List = styled.ul`
  margin: 0px;
  display: flex;
  align-items: center;
  height: 70px;
  justify-content: center;
`;

export const ListItem = styled.li`
  margin-right: 10px;
  height: 70px;
  display: flex;
  align-items: center;
  font-size: 18px;
  @media screen and (max-width: 650px) {
    & {
      display: none;
    }
  }
`;
