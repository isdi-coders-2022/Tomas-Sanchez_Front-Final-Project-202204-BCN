import { useNavigate } from "react-router-dom";
import { EditButtonStyled } from "./EditButtonStyled";

const EditButton = ({ id: _id }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit-new-coffeeshops/${_id}`);
  };

  return (
    <EditButtonStyled>
      <button className="button-logOut" onClick={handleEdit}>
        Edit
      </button>
    </EditButtonStyled>
  );
};

export default EditButton;
