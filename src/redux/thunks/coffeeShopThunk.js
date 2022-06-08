import axios from "axios";
import {
  deleteCoffeeShopActionCreator,
  loadCoffeeShopsActionCreator,
} from "../features/coffeeShopsSlice";

export const loadCoffeeShopThunk = () => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}coffeeshops/list`;
  const token = localStorage.getItem("token");

  try {
    const {
      data: { coffeShops },
    } = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (coffeShops) {
      dispatch(loadCoffeeShopsActionCreator(coffeShops));
    }
  } catch (error) {
    return error.message;
  }
};

export const deleteCoffeeShopThunk = (id) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}coffeeshops/${id}`;
  const { status } = await axios.delete(url);

  if (status === 200) {
    dispatch(deleteCoffeeShopActionCreator(id));
  }
};
