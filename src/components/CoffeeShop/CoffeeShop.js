import Button from "../Button/Button";
import EditButton from "../EditButton/EditButton";
import CoffeShopStyled from "./CoffeeShopStyled";

const CoffeeShop = ({ coffeShop: { name, image, address, _id } }) => {
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
                <span> {address}</span>
                <Button id={_id} />
                <EditButton id={_id} />
              </div>
            </div>
          </div>
        </div>
      </CoffeShopStyled>
    </>
  );
};

export default CoffeeShop;
