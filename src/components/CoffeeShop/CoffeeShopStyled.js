import styled from "styled-components";

const CoffeeShopStyled = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px;
  }

  .coffeeshop__img {
    border-radius: 20px 20px 0px 0px;
    object-fit: cover;
  }

  .coffeeshop-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 0px 0px 20px 20px;
    background-color: white;
    font-size: 20px;
    height: 180px;
  }

  .coffeeshop-button {
    width: 70%;
    display: flex;
    justify-content: space-evenly;
  }

  .coffeeshop-name {
    font-size: 30px;
    font-weight: bold;
    padding: 0;
  }
`;

export default CoffeeShopStyled;
