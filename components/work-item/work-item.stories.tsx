import React from "react";
import { ComponentMeta } from "@storybook/react";
import { WorkItem } from "./work-item";

const Block: React.VoidFunctionComponent = () => <h1>WIP</h1>;
export default {
  title: "Components/WorkItem",
  component: WorkItem,
} as ComponentMeta<typeof Block>;

export const Basic = {
  args: {},
  parameters: {},
};
