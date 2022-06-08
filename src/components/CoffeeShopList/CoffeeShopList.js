import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCoffeeShopThunk } from "../../redux/thunks/coffeeShopThunk";
import CoffeeShop from "../CoffeeShop/CoffeeShop";

const CoffeeShopList = () => {
  const dispatch = useDispatch();
  const coffeeShops = useSelector((state) => state.coffeeShops);

  useEffect(() => {
    dispatch(loadCoffeeShopThunk());
  }, [dispatch]);

  return (
    <>
      <ul>
        {coffeeShops.map((coffeeShop) => {
          return (
            <li key={coffeeShop._id}>
              <CoffeeShop coffeShop={coffeeShop} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CoffeeShopList;
