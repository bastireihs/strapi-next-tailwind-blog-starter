import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Routes, Size } from '@/lib/enums';
import { IArticle } from '@/lib/interfaces';

import { FormattedDate, Tags } from '@/components/Elements';

interface CardGridProps {
  article: IArticle;
}

const CardGrid: React.FC<CardGridProps> = ({ article }) => {
  const { slug, title, publishedAt, featuredImage, categories = [] } = article;

  const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL || process.env.NEXT_PUBLIC_LOCALHOST_URL}${featuredImage.url}`;

  return (
    <section className="group flex flex-col gap-4 items-center text-dark dark:text-light">
      <Link
        href={`${Routes.ROOT}${slug}`}
        className="rounded-xl overflow-hidden shadow-2xl"
      >
        <Image
          src={imageUrl}
          priority
          alt={`Thumbnail image for ${title}`}
          width={featuredImage.formats.medium.width}
          height={featuredImage.formats.medium.height}
          className="aspect-[4/3] object-cover rounded-xl group-hover:scale-105 animation"
        />
      </Link>

      <article className="flex flex-col w-full justify-start">
        <header className="flex gap-4">
          <Tags categories={categories} size={Size.SM} />
        </header>
        <main className="flex flex-col gap-1">
          <Link href={`${Routes.ROOT}${slug}`}>
            <h2 className="font-os font-semibold tracking-wider text-base sm:text-xl">
              <span className="text-hover-animation">{title}</span>
            </h2>
          </Link>

          <FormattedDate date={publishedAt} />
        </main>
      </article>
    </section>
  );
};

export default CardGrid;
