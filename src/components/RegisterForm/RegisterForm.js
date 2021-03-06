import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/thunks/userThunks";
import { Link, useNavigate } from "react-router-dom";
import RegisterFormStyled from "./RegisterFormStyled";

const RegisterForm = () => {
  const initialForm = {
    name: "",
    username: "",
    password: "",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialForm);

  const updateData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(registerThunk(formData));
    setFormData(initialForm);

    navigate("/coffeeshops");
  };
  return (
    <RegisterFormStyled>
      <h1>Register</h1>
      <form
        className="login-form"
        onSubmit={handleSubmit}
        autoComplete="off"
        noValidate
      >
        <div className="login-form__wrapper">
          <label className="login-form__label" htmlFor="name">
            Name
            <input
              className="login-form__input"
              type="text"
              id="name"
              value={formData.name}
              onChange={updateData}
              placeholder="Name:"
            />
          </label>
          <label className="login-form__label" htmlFor="username">
            Username
            <input
              className="login-form__input"
              type="text"
              id="username"
              value={formData.username}
              onChange={updateData}
              placeholder="Username:"
            />
          </label>
          <label className="login-form__label" htmlFor="password">
            Password
            <input
              className="login-form__input"
              type="password"
              id="password"
              value={formData.password}
              onChange={updateData}
              placeholder="Password:"
            />
          </label>
          <button
            className="login-form__button"
            type="submit"
            disabled={
              formData.name === "" ||
              formData.username === "" ||
              formData.password === ""
            }
          >
            Sign Up
          </button>
          <div className="login-form__text">
            <span>Do you have an account?</span>
          </div>
          <Link className="" to={"/login"}>
            Sign In
          </Link>
        </div>
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
