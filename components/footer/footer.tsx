import React from 'react';
import { EmailSVG } from '../svgs/email-svg';
import { GithubSVG } from '../svgs/github-svg';
import { InstagramSVG } from '../svgs/instagram-svg';
import { LinkedInSVG } from '../svgs/linkedin-svg';
import { ResumeSVG } from '../svgs/resume-svg';
import { Typography } from '../typography/typography';

const socialLinks = [
  {
    name: 'Facebook',
    icon: '/social-icons/facebook.svg',
    href: 'https://www.facebook.com/Watashi',
  },
  {
    name: 'Instagram',
    icon: '/social-icons/instagram.svg',
    href: 'https://www.instagram.com/matty0187/',
  },
  {
    name: 'Linkedin',
    icon: '/social-icons/linkedin.svg',
    href: 'https://www.linkedin.com/in/morningharwood/',
  },
  {
    name: 'Twitter',
    icon: '/social-icons/twitter.svg',
    href: 'https://twitter.com/Matty0187',
  },
];

const Footer = () => {
  const buttonClasses =
    'rounded px-2 py-2 bg-transparent tracking-wide transition-all duration-200 ease-in-out hover:bg-primary-hover focus:bg-primary-focus active:bg-primary-active';

  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center bg-primary-default px-4 lg:px-12 py-5 border-t border-tertiary-focus">
      <div className="flex items-center">
        <a
          href="https://github.com/tylernevell/nevell-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClasses} flex`}
        >
          <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="#f7fafc"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-4 mt-1"
          >
            <path
              d="M5.418 0.553999C6.426 0.553999 7.296 0.805999 8.028 1.31C8.76 1.802 9.318 2.474 9.702 3.326C10.086 4.178 10.278 5.126 10.278 6.17C10.278 7.214 10.086 8.162 9.702 9.014C9.318 9.854 8.76 10.52 8.028 11.012C7.296 11.504 6.426 11.75 5.418 11.75C4.41 11.75 3.534 11.504 2.79 11.012C2.058 10.52 1.494 9.848 1.098 8.996C0.714 8.144 0.522 7.202 0.522 6.17C0.522 5.126 0.714 4.178 1.098 3.326C1.494 2.474 2.058 1.802 2.79 1.31C3.534 0.805999 4.41 0.553999 5.418 0.553999ZM5.418 1.454C4.578 1.454 3.864 1.664 3.276 2.084C2.7 2.492 2.262 3.056 1.962 3.776C1.674 4.484 1.53 5.282 1.53 6.17C1.53 7.058 1.674 7.856 1.962 8.564C2.262 9.26 2.7 9.812 3.276 10.22C3.864 10.628 4.578 10.832 5.418 10.832C6.258 10.832 6.966 10.628 7.542 10.22C8.13 9.812 8.568 9.26 8.856 8.564C9.144 7.856 9.288 7.058 9.288 6.17C9.288 5.282 9.144 4.484 8.856 3.776C8.568 3.056 8.13 2.492 7.542 2.084C6.966 1.664 6.258 1.454 5.418 1.454ZM5.472 2.75C5.928 2.75 6.312 2.804 6.624 2.912C6.936 3.02 7.26 3.2 7.596 3.452L6.948 4.298C6.48 3.938 6.012 3.758 5.544 3.758C5.04 3.758 4.632 3.956 4.32 4.352C4.008 4.736 3.852 5.336 3.852 6.152C3.852 6.92 4.002 7.502 4.302 7.898C4.602 8.282 5.016 8.474 5.544 8.474C6.12 8.474 6.636 8.264 7.092 7.844L7.686 8.708C7.05 9.272 6.318 9.554 5.49 9.554C4.614 9.554 3.906 9.254 3.366 8.654C2.826 8.054 2.556 7.22 2.556 6.152C2.556 5.432 2.688 4.82 2.952 4.316C3.216 3.8 3.57 3.41 4.014 3.146C4.458 2.882 4.944 2.75 5.472 2.75Z"
              fill="#f7fafc"
            />
          </svg>

          <Typography
            variant="span"
            color="text-secondary-default"
            fontFamily="font-mono"
            size="text-sm"
          >
            Tyler Nevell {new Date().getFullYear()}
          </Typography>
        </a>
      </div>
      <div className="flex -mx-4 mt-4 sm:mt-0">
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
          href="https://www.instagram.com/tynevell/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
        >
          <InstagramSVG />
        </a>
        <a
          href="mailto:tylernevell@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClasses}
        >
          <EmailSVG />
        </a>
      </div>
    </footer>
  );
};

export { Footer };
