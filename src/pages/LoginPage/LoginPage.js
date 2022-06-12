import LoginForm from "../../components/LoginForm/LoginForm";
import styled from "styled-components";

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-image: url("image/fondo de pantalla.jpg");
  background-size: cover;
  height: 100vh;
`;

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LoginForm />
    </LoginPageContainer>
  );
};

export default LoginPage;
