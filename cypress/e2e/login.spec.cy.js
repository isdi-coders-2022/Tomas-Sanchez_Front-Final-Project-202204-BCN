describe("Given the CoffeeShop App", () => {
  describe("When the user tried to login", () => {
    it("Then it can do login, go login", () => {
      cy.visit(
        "https://tomas-sanchez-front-final-project-202204-bcn.netlify.app/"
      );
      cy.get('input[placeholder="Username:"]').type("Tomatito");
      cy.get('input[placeholder="Password:"]').type("123456{enter}");
    });
  });
});
