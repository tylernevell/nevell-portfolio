import React from "react";
import { ComponentMeta } from "@storybook/react";
import { GithubSVG } from "./github-svg";
import { LinkedInSVG } from "./linkedin-svg";
import { ResumeSVG } from "./resume-svg";
import { EmailSVG } from "./email-svg";
import { InstagramSVG } from "./instagram-svg";
import { Initial } from "./initial";

const Block: React.VoidFunctionComponent = () => (
  <>
    <GithubSVG />
    <LinkedInSVG />
    <ResumeSVG />
    <EmailSVG />
    <InstagramSVG />
    <Initial />
  </>
);
export default {
  title: "Components/SVGs",
  component: Block,
} as ComponentMeta<typeof Block>;

export const Basic = {
  args: {},
  parameters: {},
};
