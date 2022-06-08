import styled from "styled-components";

const ButtonContainer = styled.div`
  button {
    width: 70px;
    height: 70px;
  }
`;

const Button = () => {
  return (
    <ButtonContainer>
      <button>Delete</button>
    </ButtonContainer>
  );
};

export default Button;
