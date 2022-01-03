import { ComponentMeta } from "@storybook/react";
import { TeamBubbles } from "./team-bubbles";

export default {
  title: "Components/TeamBubbles",
  component: TeamBubbles,
} as ComponentMeta<typeof TeamBubbles>;
export const Basic = {
  args: {},
  parameters: {
    design: { type: "figma", url: "" },
    status: { type: "wip" },
  },
};
