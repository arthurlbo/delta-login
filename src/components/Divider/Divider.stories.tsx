import { Meta, StoryFn } from "@storybook/react";
import { Divider } from "./Divider";

export default {
    title: "Divider",
    component: Divider,
} as Meta;

export const Default: StoryFn = () => <Divider />;
