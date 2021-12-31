import { VoidFunctionComponent } from "react";
import { EmailSVG } from "../svgs/email-svg";
import { GithubSVG } from "../svgs/github-svg";
import { InstagramSVG } from "../svgs/instagram-svg";
import { LinkedInSVG } from "../svgs/linkedin-svg";
import { ResumeSVG } from "../svgs/resume-svg";

const IconLinks: VoidFunctionComponent = () => {
  return (
    <>
      <a
        href="https://github.com/tylernevell"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded px-3 py-3 bg-transparent tracking-wide hover:bg-primary-hover focus:bg-primary-focus active:bg-primary-active"
      >
        <GithubSVG />
      </a>
      <a
        href="https://www.linkedin.com/in/tylernevell"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded px-3 py-3 bg-transparent tracking-wide hover:bg-primary-hover"
      >
        <LinkedInSVG />
      </a>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="rounded px-3 py-3 bg-transparent tracking-wide hover:bg-primary-hover"
      >
        <ResumeSVG />
      </a>
      <a
        href="https://www.instagram.com/tylernevell/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded px-3 py-3 bg-transparent tracking-wide hover:bg-primary-hover"
      >
        <InstagramSVG />
      </a>
      <a
        href="mailto:tylernevelljobs@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded px-3 py-3 bg-transparent tracking-wide hover:bg-primary-hover"
      >
        <EmailSVG />
      </a>
    </>
  );
};

export { IconLinks };
