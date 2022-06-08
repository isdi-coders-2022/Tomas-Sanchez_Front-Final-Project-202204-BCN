import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteCoffeeShopThunk } from "../../redux/thunks/coffeeShopThunk";

const ButtonContainer = styled.div`
  button {
    width: 70px;
    height: 70px;
  }
`;

const Button = ({ id: _id }) => {
  const dispatch = useDispatch();
  const buttonDelete = () => {
    dispatch(deleteCoffeeShopThunk(_id));
  };
  return (
    <ButtonContainer>
      <button onClick={buttonDelete}>Delete</button>
    </ButtonContainer>
  );
};

export default Button;
