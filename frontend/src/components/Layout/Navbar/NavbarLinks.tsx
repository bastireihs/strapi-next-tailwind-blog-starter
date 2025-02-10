'use client';

import Link from 'next/link';

import classNames from 'classnames';
import { isActivePath } from '@/lib/utils';

interface NavbarLinksProps {
  currentPathname: string;
  links: { href: string; name: string }[];
  onLinkClick: () => void;
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({
  currentPathname,
  links,
  onLinkClick,
}) => {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={onLinkClick}
            className={classNames(
              'font-os font-semibold text-xl hover:scale-105 animation',
              {
                'text-accent': isActivePath(link.href, currentPathname),
                ' text-dark dark:text-light': !isActivePath(
                  link.href,
                  currentPathname,
                ),
              },
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
};

export default NavbarLinks;
