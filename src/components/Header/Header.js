import styled from "styled-components";
import NavbarMenu from "../NavbarMenu/NavbarMenu";

const Header = () => {
  const HeaderStyled = styled.header`
    display: flex;
    justify-content: center;
    background-color: #ce813a;
  `;
  return (
    <>
      <NavbarMenu />
      <HeaderStyled>
        <h1 className="tittle">Tomas Café?</h1>
      </HeaderStyled>
    </>
  );
};

export default Header;
