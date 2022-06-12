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
      const expectedFavourites = screen.getByText("Favourites");
      const expectedInviteFriends = screen.getByText("Add New CoffeeShop");
      const expectedRatingList = screen.getByText("Rating List");

      expect(expectedHome).toBeInTheDocument();
      expect(expectedFavourites).toBeInTheDocument();
      expect(expectedInviteFriends).toBeInTheDocument();
      expect(expectedRatingList).toBeInTheDocument();
    });
  });
});
