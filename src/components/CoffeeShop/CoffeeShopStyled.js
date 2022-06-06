import styled from "styled-components";

const CoffeShopStyled = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  .coffeshop-image {
    display: flex;
    justify-content: center;
  }

  .coffeshop__img {
    width: 100%;
    height: 100%;
  }

  .coffeshop-info {
    background-color: white;
    display: flex;
    font-size: 20px;
    justify-content: space-between;
    padding-bottom: 40px;
  }
`;

export default CoffeShopStyled;
