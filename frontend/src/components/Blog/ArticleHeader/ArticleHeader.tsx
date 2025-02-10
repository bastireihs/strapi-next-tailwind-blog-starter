import React from 'react';
import Image from 'next/image';

import { IArticle } from '@/lib/interfaces';

import { FormattedDate, ImageOverlay, Tags } from '@/components/Elements';

interface ArticleHeaderProps {
  article: IArticle;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ article }) => {
  const { title, featuredImage, publishedAt, categories = [] } = article;
  const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL || process.env.NEXT_PUBLIC_LOCALHOST_URL}${featuredImage.url}`;

  return (
    <header className="relative w-full flex flex-col justify-end h-[50vh] sm:h-[60vh] p-6 sm:p-8 md:p-12 lg:p-16 ">
      <ImageOverlay />
      <Image
        priority
        src={imageUrl}
        alt={`Thumbnail image for ${title}`}
        fill
        className="-z-10 object-cover rounded-xl"
        sizes="(min-width: 1024px) 1024px, 100vw"
      />
      <article className="z-0 w-full flex flex-col lg:w-3/4 gap-2 sm:gap-6">
        <section className="flex gap-4">
          <Tags categories={categories} />
        </section>
        <h1 className="font-os font-medium text-light text-2xl md:text-3xl lg:text-7xl">
          <span className="underline decoration-accent decoration-6 underline-offset-1">
            {title}
          </span>
        </h1>
        <section className="flex gap-8 items-center">
          <FormattedDate className="text-gray sm:text-2xl" date={publishedAt} />
        </section>
      </article>
    </header>
  );
};

export default ArticleHeader;
