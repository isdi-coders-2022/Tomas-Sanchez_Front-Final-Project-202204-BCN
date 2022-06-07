import styled from "styled-components";
import CoffeeShopList from "../../components/CoffeeShop/CoffeeShopList/CoffeeShopList";

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
        <CoffeeShopList />
      </CoffeeShopStyled>
    </>
  );
};

export default CoffeeShopPage;
