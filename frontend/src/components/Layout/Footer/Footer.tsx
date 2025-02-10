import React from 'react';
import Link from 'next/link';

import { Routes } from '@/lib/enums';

import { SocialLinks } from '@/components/Elements';

interface FooterProps {
  socialLinks: {
    linkedin: string;
    github: string;
  };
}

const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  return (
    <section className="py-16 flex flex-col items-center gap-6">
      <div className="flex gap-4">
        <SocialLinks links={socialLinks} inverted />
      </div>
      <Link
        href={Routes.LEGAL}
        className="font-os font-semibold text-light dark:text-dark text-lg sm:text-xl hover:underline decoration-light dark:decoration-dark"
      >
        legal notice / privacy policy
      </Link>
      <p className="font-os font-semibold text-light dark:text-dark text-xl">
        2025
      </p>
    </section>
  );
};

export default Footer;
