import { Heading } from "./Heading";

describe("<Heading />", () => {
    it("should have the text Log in", () => {
        cy.mount(<Heading />);
        cy.get("h1").contains("Log in");
    });

    it("should have the text Welcome", () => {
        cy.mount(<Heading />);
        cy.get("p").contains("Welcome");
    });
});
