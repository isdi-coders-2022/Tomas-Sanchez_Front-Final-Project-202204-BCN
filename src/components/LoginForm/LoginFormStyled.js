import styled from "styled-components";

const LoginFormStyled = styled.div`
  background-color: white;
  height: 50vh;
  margin-left: 20px;
  margin-right: 20px;
  border: 2px solid rgb(243, 244, 246);
  padding: 2.5rem 2rem 2.5rem 2.5rem;
  width: 448px;
  border-radius: 1.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);

  h1 {
    margin: 0;
    margin-bottom: 1rem;
  }
  .login-form {
    &__wrapper {
      padding-bottom: 1rem;
    }

    &__label {
      font-weight: 400;
      font-size: 1.3rem;
    }

    &__input {
      width: calc(100% - 2rem);
      border: 1px solid #222;
      border-radius: 0.375rem;
      padding: 0.75rem 1rem;
      outline: none;
      font-size: 1rem;
    }

    &__button {
      margin-top: 1rem;
      margin-bottom: 1rem;
      width: 100%;
      padding: 0.75rem 1rem;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.25rem;
      border-radius: 30px;
      background-color: #ce813a;
      cursor: pointer;
    }

    &__text {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      font-size: 1rem;
      font-weight: 400;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      font-size: 20px;
    }
  }
  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    list-style: none;
    color: #ce813a;
    font-size: 15px;
  }
`;

export default LoginFormStyled;
