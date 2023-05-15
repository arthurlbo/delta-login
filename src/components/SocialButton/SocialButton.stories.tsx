import { Meta, StoryFn } from "@storybook/react";
import { SocialButton } from "./SocialButton";

export default {
    title: "SocialButton",
    component: SocialButton,
} as Meta;

export const Default: StoryFn = () => <SocialButton image={"*.svg"} text={""} />;
