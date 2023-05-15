import { Image } from "./Image";

describe("<Image />", () => {
    it("should render image", () => {
        cy.mount(<Image />);
        cy.get("img");
    });
});
