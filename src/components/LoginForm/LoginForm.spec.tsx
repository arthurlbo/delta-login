import { LoginForm } from "./LoginForm";

describe("<LoginForm />", () => {
    it("should submit the form ", () => {
        cy.mount(<LoginForm />);
        cy.get("form").submit();
    });
});
