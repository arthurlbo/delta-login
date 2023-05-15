import { Meta, StoryFn } from "@storybook/react";
import { Remember } from "./Remember";

export default {
    title: "Remember",
    component: Remember,
} as Meta;

export const Default: StoryFn = () => <Remember />;
