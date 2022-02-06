import { VoidFunctionComponent } from 'react';
import { EmailSVG } from '../svgs/email-svg';
import { GithubSVG } from '../svgs/github-svg';
import { InstagramSVG } from '../svgs/instagram-svg';
import { LinkedInSVG } from '../svgs/linkedin-svg';
import { ResumeSVG } from '../svgs/resume-svg';

const IconLinks: VoidFunctionComponent = () => {
  const buttonClasses =
    'rounded px-3 py-3 bg-transparent tracking-wide transition-all duration-200 ease-in-out hover:bg-primary-hover focus:bg-primary-focus active:bg-primary-active';

  return (
    <>
      <a
        href="https://github.com/tylernevell"
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        <GithubSVG />
      </a>
      <a
        href="https://www.linkedin.com/in/tylernevell"
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        <LinkedInSVG />
      </a>
      <a
        href="tyler-nevell-resume-2022.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        <ResumeSVG />
      </a>
      <a
        href="https://www.instagram.com/tylernevell/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        <InstagramSVG />
      </a>
      <a
        href="mailto:tylernevelljobs@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        <EmailSVG />
      </a>
    </>
  );
};

export { IconLinks };
