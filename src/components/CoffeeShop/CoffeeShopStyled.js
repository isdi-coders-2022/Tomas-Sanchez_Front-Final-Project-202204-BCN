import styled from "styled-components";

const CoffeeShopStyled = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    margin: 20px 20px 20px 20px;
  }

  .coffeeshop-card {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .coffeeshop-image {
    display: flex;
    justify-content: center;
  }

  .coffeeshop__img {
    width: 100%;
    height: 100%;
  }

  .coffeeshop-info {
    background-color: white;
    display: flex;
    font-size: 20px;
    justify-content: space-between;
    padding-bottom: 40px;
  }
`;

export default CoffeeShopStyled;
