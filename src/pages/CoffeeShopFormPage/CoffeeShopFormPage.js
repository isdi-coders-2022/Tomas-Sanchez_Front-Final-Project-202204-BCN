import styled from "styled-components";
import CoffeeShopForm from "../../components/CoffeeShopForm/CoffeeShopForm";

const CoffeeShopFormPageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-image: url("image/fondo de pantalla.jpg");
  background-size: cover;
  height: 100vh;
`;

const CoffeeShopFormPage = () => {
  return (
    <CoffeeShopFormPageContainer>
      <CoffeeShopForm />
    </CoffeeShopFormPageContainer>
  );
};

export default CoffeeShopFormPage;
