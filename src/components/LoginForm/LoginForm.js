import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/thunks/userThunks";
import LoginFormStyled from "./LoginFormStyled";

const LoginForm = () => {
  const initialForm = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const dispatch = useDispatch();

  const updateForm = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(loginThunk(formData));
    setFormData(initialForm);
  };

  return (
    <LoginFormStyled>
      <h1>Login</h1>
      <form
        className="login-form"
        onSubmit={handleSubmit}
        autoComplete="off"
        noValidate
      >
        <div className="login-form__wrapper">
          <label className="login-form__label" htmlFor="username">
            Username
          </label>

          <div className="input-wrapper">
            <input
              className="login-form__input"
              type="username"
              id="username"
              value={formData.username}
              onChange={updateForm}
              placeholder="Username:"
            />
          </div>
        </div>

        <div className="login-form__wrapper">
          <label className="login-form__label" htmlFor="password">
            Password
          </label>
          <div>
            <input
              className="login-form__input"
              type="password"
              id="password"
              value={formData.password}
              onChange={updateForm}
              placeholder="Password:"
            />
          </div>
        </div>

        <button
          className="login-form__button"
          type="submit"
          disabled={formData.username === "" || formData.password === ""}
        >
          Sign In
        </button>
      </form>
      <div className="login-form__text">
        <span>Do you need an account?</span>
      </div>
      <div>
        <Link to={"/register"}>Sign Up</Link>
      </div>
    </LoginFormStyled>
  );
};

export default LoginForm;
