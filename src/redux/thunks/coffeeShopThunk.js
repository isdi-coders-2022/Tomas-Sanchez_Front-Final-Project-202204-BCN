import axios from "axios";
import { loadCoffeeShopsActionCreator } from "../features/coffeeShopsSlice";

export const loadCoffeeShopThunk = (token) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}coffeeshops`;
  try {
    const { data: coffeeshops } = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (coffeeshops) {
      dispatch(loadCoffeeShopsActionCreator(coffeeshops));
    }
  } catch (error) {
    return error.message;
  }
};
