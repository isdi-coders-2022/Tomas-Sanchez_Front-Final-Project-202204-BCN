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
    height: 150px;
    padding: 20px 0px;
  }

  .coffeeshop-button {
    width: 70%;
    display: flex;
    justify-content: space-evenly;
  }
`;

export default CoffeeShopStyled;
