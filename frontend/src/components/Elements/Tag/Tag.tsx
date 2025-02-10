import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { Size } from '@/lib/enums';

interface TagProps {
  link?: string;
  name: string;
  size?: Size;
}

const Tag: React.FC<TagProps> = ({ link = '#', name, size = Size.MD }) => {
  const tagClass = classNames(
    'uppercase text-accent dark:text-accent font-semibold hover:scale-105 animation',
    {
      'text-xs sm:text-base md:text-lg': size === Size.SM,
      'text-sm sm:text-xl': size === Size.MD,
      'text-base sm:text-2xl md:text-2xl': size === Size.LG,
    },
  );
  return (
    <Link href={link} className={tagClass}>
      {name}
    </Link>
  );
};

export default Tag;
