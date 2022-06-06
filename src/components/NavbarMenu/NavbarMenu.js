import { NavLink } from "react-router-dom";
import NavbarMenuStyled from "./NavbarMenustyled";

const NavbarMenu = () => {
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
            <NavLink to="/">
              <p className="menu__item">Invite Friends</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <p className="menu__item">Rating List</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </NavbarMenuStyled>
  );
};

export default NavbarMenu;
