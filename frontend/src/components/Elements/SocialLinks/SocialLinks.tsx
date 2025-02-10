'use client';

import classNames from 'classnames';

import { IconGithub, IconLinkedin } from '@/components/Elements';

interface SocialLinksProps {
  inverted?: boolean;
  links: { linkedin: string; github: string };
}

const SocialLinks: React.FC<SocialLinksProps> = ({ inverted, links }) => {
  const socialLinksClass = classNames('hover:scale-110 animation', {
    'fill-light dark:fill-dark dark:text-light text-dark': inverted,
    'dark:fill-light fill-dark dark:text-dark text-light': !inverted,
  });
  return (
    <>
      <a
        href={links.linkedin}
        rel="noopener noreferrer"
        className="w-8 h-8"
        aria-label="LinkedIn"
        target="_blank"
      >
        <IconLinkedin className={socialLinksClass} />
      </a>
      <a
        href={links.github}
        rel="noopener noreferrer"
        className="w-8 h-8"
        aria-label="Github"
        target="_blank"
      >
        <IconGithub className={socialLinksClass} />
      </a>
    </>
  );
};

export default SocialLinks;
