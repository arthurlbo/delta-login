import { Logo } from "./Logo";

describe("<Logo />", () => {
    it("should render logo", () => {
        cy.mount(<Logo />);
        cy.get("img");
    });
});
