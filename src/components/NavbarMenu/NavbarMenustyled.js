import styled from "styled-components";

const NavbarMenuStyled = styled.div`
  .hamburger-menu {
    background-color: #ce813a;
    position: relative;
  }
  #menu__toggle {
    opacity: 0;
  }
  #menu__toggle:checked + .menu__btn > span {
    transform: rotate(45deg);
  }
  #menu__toggle:checked + .menu__btn > span::before {
    top: 0;
    transform: rotate(0deg);
  }
  #menu__toggle:checked + .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
  }
  #menu__toggle:checked ~ .menu__box {
    left: 0 !important;
  }
  .menu__btn {
    position: absolute;
    top: 30px;
    left: 20px;
    width: 30px;
    height: 26px;
    cursor: pointer;
    z-index: 3;
  }
  .menu__btn > span,
  .menu__btn > span::before,
  .menu__btn > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: white;
    transition-duration: 0.25s;
  }
  .menu__btn > span::before {
    content: "";
    top: -8px;
  }
  .menu__btn > span::after {
    content: "";
    top: 8px;
  }
  .menu__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: -100%;
    width: 300px;
    margin: 0;
    padding: 20px 0;
    list-style: none;
    background-color: #b7bbb4;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
    transition-duration: 0.25s;
    z-index: 2;
    .menu__box_list {
      list-style: none;
    }
  }
  .menu__item {
    display: block;
    padding: 12px 24px;
    color: white;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    transition-duration: 0.25s;
  }
  .menu__item:hover {
    background-color: #cfd8dc;
  }

  a {
    text-decoration: none;
  }
  .button {
    width: 80%;
    appearance: none;
    background-color: orange;
    border: 2px solid #ce813a;
    border-radius: 15px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    font-size: 16px;
    margin-top: auto;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;

    :hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
      transform: translateY(-2px);
    }

    :active {
      box-shadow: none;
      transform: translateY(0);
    }
  }
  p {
    color: white;
  }
`;

export default NavbarMenuStyled;
