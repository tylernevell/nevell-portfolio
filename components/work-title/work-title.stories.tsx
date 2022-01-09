import React from "react";
import { ComponentMeta } from "@storybook/react";
import { WorkTitle } from "./work-title";

const Block: React.VoidFunctionComponent = () => <h1>WIP</h1>;
export default {
  title: "Components/WorkTitle",
  component: WorkTitle,
} as ComponentMeta<typeof Block>;

export const Basic = {
  args: {},
  parameters: {},
};
