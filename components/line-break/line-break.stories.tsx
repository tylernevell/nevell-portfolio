import React from "react";
import { ComponentMeta } from "@storybook/react";
import { LineBreak } from "./line-break";

const Block: React.VoidFunctionComponent = () => <h1>WIP</h1>;
export default {
  title: "Components/LineBreak",
  component: LineBreak,
} as ComponentMeta<typeof Block>;

export const Basic = {
  args: {},
  parameters: {},
};
