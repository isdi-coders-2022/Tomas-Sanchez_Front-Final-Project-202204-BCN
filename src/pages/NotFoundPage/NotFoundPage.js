import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header/Header";

const NotFoundPageStyled = styled.div`
  text-align: center;
  h1 {
    color: #383a41;
    text-align: center;
    font-size: 2.5em;
  }

  a {
    text-decoration: none;
    color: #ce813a;
  }
`;

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <NotFoundPageStyled>
        <h1>404</h1>
        <p>COFFE NOT FOUND</p>

        <NavLink to={"/coffeeshops"}>Return to Home</NavLink>
      </NotFoundPageStyled>
    </>
  );
};

export default NotFoundPage;
