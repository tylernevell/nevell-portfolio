import React from "react";
import { ComponentMeta } from "@storybook/react";
import { ContentGroup } from "./content-group";
import { content } from "./content";

const Block: React.VoidFunctionComponent = () => (
  <>
    <ContentGroup
      heading={content.heading}
      subHeading={content.subHeading}
      buttons={content.buttons}
    />
  </>
);
export default {
  title: "Components/ContentGroup",
  component: Block,
} as ComponentMeta<typeof Block>;

export const Basic = {
  args: {},
  parameters: {},
};
