import axios from "axios";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import {
  setLoadingOffActionCreator,
  setLoadingOnActionCreator,
} from "../features/ui/uiSlice";
import {
  loginActionCreator,
  registerActionCreator,
} from "../features/userSlice";

export const loginThunk = (userData) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}user/login`;

  try {
    toast.success("You have successfully logged in!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(setLoadingOffActionCreator());
    const {
      data: { token },
    } = await axios.post(url, userData);

    if (token) {
      localStorage.setItem("token", token);
      const { name, username } = jwtDecode(token);

      dispatch(loginActionCreator({ name, username }));

      dispatch(setLoadingOnActionCreator());
    }
  } catch (error) {
    toast.error("something was wrong, please try again", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    return error.message;
  }
};

export const registerThunk = (userData) => async (dispatch) => {
  const url = `${process.env.REACT_APP_API_URL}user/register`;

  const { data } = await axios.post(url, userData);
  if (data) {
    const newUser = {
      username: data.username,
      password: userData.password,
    };
    dispatch(loginThunk(newUser));
  }

  dispatch(registerActionCreator(data));
};
