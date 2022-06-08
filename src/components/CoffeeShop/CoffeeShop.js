import Button from "../Button/Button";
import CoffeShopStyled from "./CoffeeShopStyled";

const CoffeeShop = ({ coffeShop: { name, image, adress } }) => {
  return (
    <>
      <CoffeShopStyled>
        <div className="container">
          <div className="coffeeshop-card">
            <div className="coffeeshop-image">
              <img src={image} alt={name} className="coffeeshop__img" />
            </div>
            <div className="coffeeshop-info">
              <div className="coffeeshop-name">
                <span className="name">{name}</span>
              </div>
              <div className="info">
                <span> {adress}</span>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </CoffeShopStyled>
    </>
  );
};

export default CoffeeShop;
