import { rest } from "msw";

export const mockCoffeeShop = [
  {
    id: "56ab0ertghrtgh6bb8",
    name: "Morrow",
    adress: "calle la lloreria",
    image: "image.png",
  },
];

export const handlers = [
  rest.post(`${process.env.REACT_APP_API_URL}user/login`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ name: "Tomas", token: "mockToken" }))
  ),
  rest.post(`${process.env.REACT_APP_API_URL}user/register`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({ username: "Tomatito", id: "soyunaid" }))
  ),
];
