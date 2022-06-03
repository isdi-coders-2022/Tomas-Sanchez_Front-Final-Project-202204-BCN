import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginThunk } from "../../redux/thunks/userThunks";

const LoginForm = () => {
  const initialForm = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user);

  const updateForm = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/coffeeshops");
    }
  }, [navigate, userInfo]);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(loginThunk(formData));
    setFormData(initialForm);
  };

  return (
    <>
      {" "}
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <div className="login-form__wrapper">
          <label className="login-form__label" htmlFor="username">
            Username
          </label>

          <div className="input-wrapper">
            <input
              className="login-form__input"
              id="username"
              type="username"
              autoComplete="off"
              required
              onChange={updateForm}
              value={formData.username}
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
              id="password"
              type="password"
              autoComplete="off"
              required
              onChange={updateForm}
              value={formData.password}
            />
          </div>
        </div>

        <button className="login-form__button" type="submit">
          Sign Up
        </button>
      </form>
      <div className="login-form__text">
        <span>Do you need an account?</span>
      </div>
      <div>
        <Link to={"/register"}>Sign Up</Link>
      </div>
    </>
  );
};

export default LoginForm;
