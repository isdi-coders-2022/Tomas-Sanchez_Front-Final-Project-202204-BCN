import styled from "styled-components";
import CoffeeShopForm from "../../components/CoffeeShopForm/CoffeeShopForm";

const CoffeeShopFormPageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CoffeeShopFormPage = () => {
  return (
    <CoffeeShopFormPageContainer>
      <CoffeeShopForm />
    </CoffeeShopFormPageContainer>
  );
};

export default CoffeeShopFormPage;
