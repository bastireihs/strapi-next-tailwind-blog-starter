'use client';

import { usePathname } from 'next/navigation';

import { Routes } from '@/lib/enums';

import { ButtonThemeSwitch, SocialLinks } from '@/components/Elements';

import Navbar from '../Navbar/Navbar';
import HeaderLogo from './HeaderLogo';

// TODO: get links from metadata
const linksMock = [
  { href: Routes.ROOT, name: 'Blog' },
  { href: `${Routes.CATEGORIES}/all`, name: 'Categories' },
  { href: Routes.ABOUT, name: 'About' },
];

interface HeaderProps {
  socialLinks: {
    linkedin: string;
    github: string;
  };
}

const Header: React.FC<HeaderProps> = ({ socialLinks }) => {
  const currentPathname = usePathname();

  return (
    <section className="relative py-4 sm:py-8 flex items-center justify-between">
      <div className="flex-1">
        <HeaderLogo />
      </div>
      <div className="flex-grow flex justify-center">
        <Navbar currentPathname={currentPathname} links={linksMock} />
      </div>
      <div className="flex-1 flex justify-start sm:justify-end gap-16">
        <ButtonThemeSwitch />
        <div className="hidden sm:flex gap-4">
          <SocialLinks links={socialLinks} />
        </div>
      </div>
    </section>
  );
};

export default Header;
