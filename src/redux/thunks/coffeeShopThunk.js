import axios from "axios";
import { toast } from "react-toastify";
import { loadOneCoffeeShopActionCreator } from "../features/coffeeShopSlice";
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
      }, 2000);
    }
  } catch (error) {
    return error.message;
  }
};

export const deleteCoffeeShopThunk = (id) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}coffeeshops/${id}`;

  toast.error("You have deleted a coffee shop", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

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

    toast.success("You have added a new Coffee Shop", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export const editCoffeeShopThunk = (id, coffeeShopData) => async (dispatch) => {
  const url = process.env.REACT_APP_API_URL;

  toast.success("You have edited it correctly", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const {
    data: { updatedCoffeeShop },
  } = await axios.put(`${url}coffeeshops/${id}`, coffeeShopData);

  if (updatedCoffeeShop) {
    dispatch(editCoffeeShopActionCreator(updatedCoffeeShop));
  }
};

export const getCoffeeShopThunk = (id) => async (dispatch) => {
  const url = process.env.REACT_APP_API_URL;
  const { data } = await axios.get(`${url}coffeeshops/${id}`);
  dispatch(loadOneCoffeeShopActionCreator(data.coffeeShop));
};
