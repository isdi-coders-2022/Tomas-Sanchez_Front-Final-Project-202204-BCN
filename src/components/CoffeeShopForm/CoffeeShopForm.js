import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { blankStateActionCreator } from "../../redux/features/coffeeShopSlice";
import {
  createCoffeeShopThunk,
  editCoffeeShopThunk,
} from "../../redux/thunks/coffeeShopThunk";
import CoffeeShopFormStyled from "./CoffeeShopFormStyled";

const CoffeeShopForm = () => {
  const initialForm = {
    name: "",
    image: "",
    address: "",
    rate: 0,
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const checkIdParams = (id) => {
    if (id) {
      return true;
    } else {
      return false;
    }
  };

  const checkParams = checkIdParams(id);

  const [formData, setFormData] = useState(initialForm);

  const { coffeeShop } = useSelector((state) => state.coffeeShop);

  useEffect(() => {
    if (coffeeShop.name) {
      setFormData(coffeeShop);
    }
  }, [coffeeShop]);

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
    dispatch(blankStateActionCreator());

    setFormData(initialForm);

    navigate("/coffeeshops");
  };

  return (
    <CoffeeShopFormStyled>
      {!checkParams && <h1>Add New CoffeShop</h1>}
      {checkParams && <h1>EditCoffeShop</h1>}
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
          <label className="login-form__label" htmlFor="rate">
            Rate
            <input
              className="login-form__input"
              type="number"
              id="rate"
              value={formData.rate}
              onChange={updateData}
              placeholder="Rate:"
              min={0}
              max={10}
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
            {!checkParams && <>Add </>}
            {checkParams && <>Edit</>}
          </button>

          <Link className="" to={"/coffeeshops"}>
            Return to the main page
          </Link>
        </div>
      </form>
    </CoffeeShopFormStyled>
  );
};

export default CoffeeShopForm;
