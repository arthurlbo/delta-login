import { Meta, StoryFn } from "@storybook/react";
import { Label } from "./Label";

export default {
    title: "Label",
    component: Label,
} as Meta;

export const Default: StoryFn = () => <Label />;
