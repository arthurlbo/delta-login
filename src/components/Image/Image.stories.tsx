import { Meta, StoryFn } from "@storybook/react";
import { Image } from "./Image";

export default {
    title: "Image",
    component: Image,
} as Meta;

export const Default: StoryFn = () => <Image />;
