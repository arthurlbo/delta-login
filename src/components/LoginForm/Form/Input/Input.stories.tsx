import { Meta, StoryFn } from "@storybook/react";
import { Input } from "./Input";
import { Envelope } from "@phosphor-icons/react";

export default {
    title: "Input",
    component: Input,
} as Meta;

export const Default: StoryFn = () => <Input name={""} LeftIcon={Envelope} RightIcon={null} />;
