import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CoffeeShopForm from "../../components/CoffeeShopForm/CoffeeShopForm";
import { getCoffeeShopThunk } from "../../redux/thunks/coffeeShopThunk";

const EditCoffeeShopFormPageContainer = styled.div`
  a {
    font-size: 20px;
  }
`;

const EditCoffeeShopFormPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoffeeShopThunk(id));
  }, [dispatch, id]);

  return (
    <EditCoffeeShopFormPageContainer>
      <CoffeeShopForm />
    </EditCoffeeShopFormPageContainer>
  );
};

export default EditCoffeeShopFormPage;
