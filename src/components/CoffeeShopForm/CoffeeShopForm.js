import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  createCoffeeShopThunk,
  editCoffeeShopThunk,
} from "../../redux/thunks/coffeeShopThunk";

const CoffeeShopForm = () => {
  const initialForm = {
    name: "",
    image: "",
    address: "",
    rate: 0,
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

  const register = (event) => {
    event.preventDefault();
    formData._id
      ? dispatch(editCoffeeShopThunk(formData._id, formData))
      : dispatch(createCoffeeShopThunk(formData));

    setFormData(initialForm);

    navigate("/coffeeshops");
  };

  return (
    <>
      <h1>Register</h1>
      <form
        className="login-form"
        onSubmit={register}
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
          <label className="login-form__label" htmlFor="address">
            Address
            <input
              className="login-form__input"
              type="text"
              id="address"
              value={formData.address}
              onChange={updateData}
              placeholder="Address:"
            />
          </label>
          <label className="login-form__label" htmlFor="Rate">
            Rate
            <input
              className="login-form__input"
              type="number"
              id="rate"
              value={formData.rate}
              onChange={updateData}
              placeholder="Rate:"
            />
          </label>
          <label className="login-form__label" htmlFor="image">
            Image
            <input
              className="login-form__input"
              type="text"
              id="image"
              value={formData.image}
              onChange={updateData}
              placeholder="Image:"
            />
          </label>
          <button
            className="login-form__button"
            type="submit"
            disabled={
              formData.name === "" ||
              formData.address === "" ||
              formData.image === ""
            }
          >
            Add
          </button>

          <Link className="" to={"/coffeeshops"}>
            Return to the main page
          </Link>
        </div>
      </form>
    </>
  );
};

export default CoffeeShopForm;
