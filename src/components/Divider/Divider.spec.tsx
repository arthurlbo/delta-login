import { Divider } from "./Divider";

describe("<Divider />", () => {
    it("should have the text", () => {
        cy.mount(<Divider />);
        cy.get("p").contains("or sign");
    });
});
