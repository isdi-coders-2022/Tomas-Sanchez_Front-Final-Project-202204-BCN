import LoginForm from "../../components/LoginForm/LoginForm";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginPage = () => {
  const navigate = useNavigate;
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
  }
  return (
    <LoginPageContainer>
      <LoginForm />
    </LoginPageContainer>
  );
};

export default LoginPage;
