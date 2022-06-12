import { useDispatch } from "react-redux";
import { deleteCoffeeShopThunk } from "../../redux/thunks/coffeeShopThunk";
import { ButtonStyled } from "./ButtonStyled";

const Button = ({ id: _id }) => {
  const dispatch = useDispatch();
  const buttonDelete = () => {
    dispatch(deleteCoffeeShopThunk(_id));
  };
  return (
    <ButtonStyled>
      <button className="button-logOut" onClick={buttonDelete}>
        Delete
      </button>
    </ButtonStyled>
  );
};

export default Button;
