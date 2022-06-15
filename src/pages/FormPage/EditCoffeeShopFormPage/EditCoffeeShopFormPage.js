import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CoffeeShopForm from "../../../components/CoffeeShopForm/CoffeeShopForm";
import { getCoffeeShopThunk } from "../../../redux/thunks/coffeeShopThunk";
import { CoffeeShopStyle } from "../CoffeeShopStyle";

const EditCoffeeShopFormPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoffeeShopThunk(id));
  }, [dispatch, id]);

  return (
    <CoffeeShopStyle>
      <CoffeeShopForm />
    </CoffeeShopStyle>
  );
};

export default EditCoffeeShopFormPage;
