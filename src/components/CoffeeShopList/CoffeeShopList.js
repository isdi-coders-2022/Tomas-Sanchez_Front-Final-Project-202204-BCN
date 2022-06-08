import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadCoffeeShopThunk } from "../../redux/thunks/coffeeShopThunk";
import CoffeeShop from "../CoffeeShop/CoffeeShop";

const CoffeeShopListStyled = styled.div`
  ul {
    list-style: none;
  }
`;

const CoffeeShopList = () => {
  const dispatch = useDispatch();
  const coffeeShops = useSelector((state) => state.coffeeShops);

  useEffect(() => {
    dispatch(loadCoffeeShopThunk());
  }, [dispatch]);

  return (
    <CoffeeShopListStyled>
      <ul>
        {coffeeShops.map((coffeeShop) => {
          return (
            <li key={coffeeShop._id}>
              <CoffeeShop coffeShop={coffeeShop} />
            </li>
          );
        })}
      </ul>
    </CoffeeShopListStyled>
  );
};

export default CoffeeShopList;
