import styled from "styled-components";
import CoffeeShopForm from "../../components/CoffeeShopForm/CoffeeShopForm";

const CoffeeShopFormPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-image: url("image/fondo de pantalla.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  background-size: cover;

  a {
    font-size: 20px;
  }
`;

const CoffeeShopFormPage = () => {
  return (
    <CoffeeShopFormPageContainer>
      <CoffeeShopForm />
    </CoffeeShopFormPageContainer>
  );
};

export default CoffeeShopFormPage;
