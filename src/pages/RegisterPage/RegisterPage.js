import styled from "styled-components";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-image: url("image/fondo de pantalla.jpg");
  background-size: cover;
  height: 100vh;
`;

const RegisterPage = () => {
  return (
    <RegisterPageContainer>
      <RegisterForm />
    </RegisterPageContainer>
  );
};

export default RegisterPage;
