import { rest } from "msw";

export const mockCoffeeShop = [
  {
    id: "56ab0ertghrtgh6bb8",
    name: "Morrow",
    address: "calle la lloreria",
    image: "image.png",
  },
];

export const mockCoffeeShops = [
  {
    id: "56ab0ertghrtfwgfh6bb8",
    name: "CoffeeLabs",
    address: "calle la murciana",
    image: "image.png",
  },
  {
    id: "56ab0fweertghrtgh6bb8",
    name: "Cafeteria el moreno",
    address: "calle 123",
    image: "image.png",
  },
  {
    id: "56ab0fwfeweertghrtgh6bb8",
    name: "Cafeteria el molino",
    address: "calle la deriva",
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
  rest.delete(
    `${process.env.REACT_APP_API_URL}coffeeshops/:id`,
    (req, res, ctx) => res(ctx.status(200), ctx.json(mockCoffeeShop))
  ),
];
