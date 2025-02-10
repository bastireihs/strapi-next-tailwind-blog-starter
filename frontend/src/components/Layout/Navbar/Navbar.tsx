'use client';

import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import { ButtonBurgerMenu } from '@/components/Elements';

import NavbarLinks from './NavbarLinks';

interface NavbarProps {
  currentPathname: string;
  links: { href: string; name: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ currentPathname, links }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section ref={navRef}>
      <ButtonBurgerMenu isOpen={isOpen} toggleOpen={() => setIsOpen(!isOpen)} />

      <nav
        className={classNames(
          'md:relative left-0 md:left-auto right-0 md:right-auto w-full p-2 md:p-0 py-16 md:py-0 md:flex flex-col md:flex-row gap-4 items-center bg-light dark:bg-dark animation',
          {
            'absolute top-12': isOpen,
            'relative top-auto': !isOpen,
            flex: isOpen,
            hidden: !isOpen,
          },
        )}
      >
        <NavbarLinks
          currentPathname={currentPathname}
          links={links}
          onLinkClick={() => setIsOpen(false)}
        />
      </nav>
    </section>
  );
};

export default Navbar;
