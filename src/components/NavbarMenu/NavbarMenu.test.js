import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavbarMenu from "./NavbarMenu";

describe("Given a NavbarMenu component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Home','Favourites', 'Invite Friends' and 'Rating list'", () => {
      render(
        <BrowserRouter>
          <NavbarMenu />
        </BrowserRouter>
      );

      const expectedHome = screen.getByText("Home");
      const expectedInviteFriends = screen.getByText("Add New CoffeeShop");
      const expectedLogOut = screen.getByText("LogOut");

      expect(expectedHome).toBeInTheDocument();
      expect(expectedInviteFriends).toBeInTheDocument();
      expect(expectedLogOut).toBeInTheDocument();
    });
  });
});
