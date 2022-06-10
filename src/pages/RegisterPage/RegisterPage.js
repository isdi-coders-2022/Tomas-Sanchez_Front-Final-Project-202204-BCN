import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const RegisterPage = () => {
  const navigate = useNavigate;
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
  }
  return (
    <RegisterPageContainer>
      <RegisterForm />
    </RegisterPageContainer>
  );
};

export default RegisterPage;
