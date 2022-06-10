import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CoffeeShopList from "../../components/CoffeeShopList/CoffeeShopList";

const CoffeeShopStyled = styled.div`
  display: flex;
  justify-content: center;
  list-style: none;
  flex-direction: column;
`;

const CoffeeShopPage = () => {
  const navigate = useNavigate;
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
  }
  return (
    <>
      <CoffeeShopStyled>
        <CoffeeShopList />
      </CoffeeShopStyled>
    </>
  );
};

export default CoffeeShopPage;
