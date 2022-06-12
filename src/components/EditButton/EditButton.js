import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const EditButtonContainer = styled.div`
  button {
    width: 70px;
    height: 70px;
  }
`;

const EditButton = ({ id: _id }) => {
  const navigate = useNavigate;

  const handleEdit = () => {
    navigate(`/editCoffeeShop/${_id}`);
  };

  return (
    <EditButtonContainer>
      <button onClick={handleEdit}>Edit</button>
    </EditButtonContainer>
  );
};

export default EditButton;
