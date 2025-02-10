import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Routes, Size } from '@/lib/enums';
import { IArticle } from '@/lib/interfaces';

import { FormattedDate, Tags } from '@/components/Elements';

interface CardSlimProps {
  article: IArticle;
}

const CardSlim: React.FC<CardSlimProps> = ({ article }) => {
  const { publishedAt, featuredImage, slug, title, categories = [] } = article;

  const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL || process.env.NEXT_PUBLIC_LOCALHOST_URL}${featuredImage.url}`;

  return (
    <div className="group flex flex-col md:flex-row gap-4 md:gap-10 items-center text-dark dark:text-light">
      <Link
        href={`${Routes.ROOT}${slug}`}
        className="h-full overflow-hidden rounded-xl shadow-2xl"
      >
        <Image
          priority
          src={imageUrl}
          alt={`Thumbnail image for ${title}`}
          width={featuredImage.formats.small.width}
          height={featuredImage.formats.small.height}
          className="aspect-square object-cover group-hover:scale-105 animation"
        />
      </Link>

      <div className="col-span-12 lg:col-span-8 w-full">
        <Tags categories={categories} size={Size.SM} />
        <Link href={`${Routes.ROOT}${slug}`}>
          <h2 className="font-os font-semibold tracking-wider capitalize text-base sm:text-xl leading-5 sm:leading-6">
            <span className="text-hover-animation">{title}</span>
          </h2>
        </Link>

        <FormattedDate date={publishedAt} />
      </div>
    </div>
  );
};

export default CardSlim;
