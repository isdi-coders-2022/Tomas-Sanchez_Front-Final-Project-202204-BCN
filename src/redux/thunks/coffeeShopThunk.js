import axios from "axios";
import { loadCoffeeShopsActionCreator } from "../features/coffeeShopsSlice";

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
