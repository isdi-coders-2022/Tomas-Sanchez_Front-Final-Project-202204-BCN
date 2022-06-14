import styled from "styled-components";
import CoffeeShopList from "../../components/CoffeeShopList/CoffeeShopList";

const CoffeeShopStyled = styled.div`
  display: flex;
  justify-content: center;
  list-style: none;
  flex-direction: column;
`;

const CoffeeShopPage = () => {
  return (
    <>
      <CoffeeShopStyled>
        <h2>All CoffeeShop</h2>
        <CoffeeShopList />
      </CoffeeShopStyled>
    </>
  );
};

export default CoffeeShopPage;
