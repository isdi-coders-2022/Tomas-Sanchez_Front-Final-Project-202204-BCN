import styled from "styled-components";
import NavbarMenu from "../NavbarMenu/NavbarMenu";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: center;
  background-color: #ce813a;
  height: 100px;
  h1 {
    font-size: 30px;
  }
`;
const Header = () => {
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
