import Button from "../Button/Button";
import EditButton from "../EditButton/EditButton";
import CoffeShopStyled from "./CoffeeShopStyled";

const CoffeeShop = ({ coffeShop: { name, image, address, _id } }) => {
  return (
    <CoffeShopStyled>
      <div className="container">
        <img src={image} alt={name} className="coffeeshop__img" />
        <div className="coffeeshop-info">
          <div className="coffeeshop-name">
            <span>{name}</span>
          </div>
          <div className="info">
            <span> {address}</span>
          </div>
          <div className="coffeeshop-button">
            <Button id={_id} />
            <EditButton id={_id} />
          </div>
        </div>
      </div>
    </CoffeShopStyled>
  );
};

export default CoffeeShop;
