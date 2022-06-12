import { NavLink, useNavigate } from "react-router-dom";

import NavbarMenuStyled from "./NavbarMenustyled";

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

        <ul className="menu__box">
          <li>
            <NavLink to="/coffeeshops">
              <p className="menu__item">Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <p className="menu__item">Favourites</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-new-coffeeshops">
              <p className="menu__item">Add New CoffeeShop</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <p className="menu__item">Rating List</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <p className="menu__item" onClick={logOut}>
                Log Out
              </p>
            </NavLink>
          </li>
        </ul>
      </div>
    </NavbarMenuStyled>
  );
};

export default NavbarMenu;
