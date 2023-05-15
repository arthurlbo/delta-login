import { Meta, StoryFn } from "@storybook/react";
import { Logo } from "./Logo";

export default {
    title: "Logo",
    component: Logo,
} as Meta;

export const Default: StoryFn = () => <Logo />;
