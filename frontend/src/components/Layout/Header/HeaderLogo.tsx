'use client';

import Link from 'next/link';

import { Routes } from '@/lib/enums';

const Logo = () => {
  return (
    <Link href={Routes.ROOT} className="text-accent dark:text-accentDark">
      <span className="font-os font-black text-sm md:text-2xl">
        B<span className="dark:text-light text-dark">log</span>
      </span>
    </Link>
  );
};

export default Logo;
