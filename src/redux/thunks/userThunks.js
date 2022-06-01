import axios from "axios";

export const registerThunk = (userData) => async () => {
  const url = `${process.env.REACT_APP_API_URL}user/register`;

  await axios.post(url, userData);
};
