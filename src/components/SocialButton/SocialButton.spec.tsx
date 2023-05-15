import { SocialButton } from "./SocialButton";
import logoFacebook from "@/assets/logoFacebook.svg";
import logoGoogle from "@/assets/logoGoogle.svg";

describe("<SocialButton />", () => {
    it("should render facebook button", () => {
        cy.mount(<SocialButton text="facebook" image={logoFacebook} />);
        cy.get("span").should("have.text", "facebook");
        cy.get('img[alt="logo facebook"]');
    });
    it("should render google button", () => {
        cy.mount(<SocialButton text="google" image={logoGoogle} />);
        cy.get("span").should("have.text", "google");
        cy.get('img[alt="logo google"]');
    });
});
