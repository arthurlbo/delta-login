import { Meta, StoryFn } from "@storybook/react";
import { LoginForm } from "./LoginForm";

export default {
    title: "LoginForm",
    component: LoginForm,
} as Meta;

export const Default: StoryFn = () => <LoginForm />;
