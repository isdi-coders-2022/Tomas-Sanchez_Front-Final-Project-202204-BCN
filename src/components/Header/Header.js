import styled from "styled-components";
import NavbarMenu from "../NavbarMenu/NavbarMenu";

const HeaderStyled = styled.header`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #ce813a;
  height: 100px;
  z-index: 1;
  bottom: 35px;
  padding: 10px;
  h1 {
    font-size: 30px;
    color: white;
    z-index: 1;
  }
  img {
    position: absolute;
    width: 80px;
  }
`;
const Header = () => {
  return (
    <>
      <NavbarMenu />
      <HeaderStyled>
        <h1 className="tittle">Tomas Café?</h1>
        <img src="/image/image-black.png" alt="logo"></img>
      </HeaderStyled>
    </>
  );
};

export default Header;
