import React from "react";
import { ComponentMeta } from "@storybook/react";
import { Highlight } from "./highlight";

const Block: React.VoidFunctionComponent = () => <h1>WIP</h1>;
export default {
  title: "Components/Highlight",
  component: Highlight,
} as ComponentMeta<typeof Block>;

export const Basic = {
  args: {},
  parameters: {},
};
