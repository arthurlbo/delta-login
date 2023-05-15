import { Meta, StoryFn } from "@storybook/react";
import { Field } from "./Field";

export default {
    title: "Field",
    component: Field,
} as Meta;

export const Default: StoryFn = () => <Field />;
