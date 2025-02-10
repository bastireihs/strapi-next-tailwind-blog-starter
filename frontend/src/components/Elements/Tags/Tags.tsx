import React from 'react';

import { Routes, Size } from '@/lib/enums';
import { ICategory } from '@/lib/interfaces';

import Tag from '../Tag';

interface TagsProps {
  categories: ICategory[];
  size?: Size;
}

const Tags: React.FC<TagsProps> = ({ categories, size }) => {
  return categories.map((category) => (
    <Tag
      key={category.id}
      link={`${Routes.CATEGORIES}/${category.slug}`}
      name={category.name}
      size={size}
    />
  ));
};

export default Tags;
