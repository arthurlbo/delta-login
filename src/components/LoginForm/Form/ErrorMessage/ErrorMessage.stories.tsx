import { Meta, StoryFn } from "@storybook/react";
import { ErrorMessage } from "./ErrorMessage";

export default {
    title: "ErrorMessage",
    component: ErrorMessage,
} as Meta;

export const Default: StoryFn = () => <ErrorMessage field={""} />;
