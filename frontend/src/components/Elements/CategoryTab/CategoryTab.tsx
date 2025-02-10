import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { Routes } from '@/lib/enums';

interface CategoryTabProps {
  category: string;
  isActive: boolean;
}

const CategoryTab: React.FC<CategoryTabProps> = ({ category, isActive }) => (
  <Link
    href={`${Routes.CATEGORIES}/${category}`}
    className={classNames(
      'py-1 md:py-2 px-6 md:px-10 font-os font-semibold rounded-3xl border-4 border-solid hover:scale-105 animation',
      isActive
        ? 'bg-light text-dark dark:bg-dark dark:text-light border-accent dark:border-accent'
        : 'bg-light text-dark dark:bg-dark dark:text-light border-dark dark:border-light',
    )}
  >
    {category}
  </Link>
);

export default CategoryTab;
