import Stepper from "./Button";

describe("<Stepper />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Stepper />);
    cy.get("[data-cy=decrement]").click();
    // cy.get("[data-cy=counter]").should("have.text", "-1");
  });
});
