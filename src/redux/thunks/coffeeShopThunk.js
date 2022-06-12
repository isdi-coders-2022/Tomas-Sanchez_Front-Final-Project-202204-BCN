import axios from "axios";
import {
  createCoffeeShopActionCreator,
  deleteCoffeeShopActionCreator,
  editCoffeeShopActionCreator,
  loadCoffeeShopsActionCreator,
} from "../features/coffeeShopsSlice";
import {
  setLoadingOffActionCreator,
  setLoadingOnActionCreator,
} from "../features/ui/uiSlice";

export const loadCoffeeShopThunk = () => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}coffeeshops/list`;
  const token = localStorage.getItem("token");

  try {
    dispatch(setLoadingOnActionCreator());
    const {
      data: { coffeShops },
    } = await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (coffeShops) {
      dispatch(loadCoffeeShopsActionCreator(coffeShops));
      setTimeout(() => {
        dispatch(setLoadingOffActionCreator());
      }, 3000);
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

export const createCoffeeShopThunk = (formData) => async (dispatch) => {
  const url = process.env.REACT_APP_API_URL;
  const { data } = await axios.post(`${url}coffeeshops/`, formData);

  if (data) {
    dispatch(createCoffeeShopActionCreator(data));
  }
};

export const editCoffeeShopThunk = (id, coffeeShopData) => async (dispatch) => {
  const url = process.env.REACT_APP_API_URL;
  const {
    data: { updatedCoffeeShop },
  } = await axios.put(`${url}coffeeshops/${id}`, coffeeShopData);

  if (updatedCoffeeShop) {
    dispatch(editCoffeeShopActionCreator(updatedCoffeeShop));
  }
};
