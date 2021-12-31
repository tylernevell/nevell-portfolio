import React from "react";
import { Meta, Story } from "@storybook/react";
import { NavBar } from "./nav-bar";
import { linkItems } from "./link-items";

export default {
  title: "Components/NavBar",
  component: NavBar,
  argTypes: {},
} as Meta;

export const Menu: Story = () => <NavBar links={linkItems} />;
