import { NavLink, useNavigate } from "react-router-dom";
import NavbarMenuStyled from "./NavbarMenustyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCoffee } from "@fortawesome/free-solid-svg-icons";
const NavbarMenu = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <NavbarMenuStyled>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
        <div className="menu__box">
          <ul className="menu__box_list">
            <li className="menu__Home">
              <NavLink to="/coffeeshops">
                <FontAwesomeIcon icon={faHouse} className="faHouse" />
                <p className="menu__item">Home</p>
              </NavLink>
            </li>
            <li className="menu__Coffe">
              <NavLink to="/add-new-coffeeshops">
                <FontAwesomeIcon icon={faCoffee} className="faCoffee" />
                <p className="menu__item">Add New CoffeeShop</p>
              </NavLink>
            </li>
          </ul>
          <div className="button">
            <NavLink to="/login">
              <p onClick={logOut}>LogOut</p>
            </NavLink>
          </div>
        </div>
      </div>
    </NavbarMenuStyled>
  );
};

export default NavbarMenu;
