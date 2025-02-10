import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';

import { CardVariant, Routes, Size } from '@/lib/enums';
import { IArticle } from '@/lib/interfaces';

import { ImageOverlay, Tags } from '@/components/Elements';

import CardExcerpt from './CardExcerpt';
import CardHeading from './CardHeading';

interface CardImageBackgroundProps {
  article: IArticle;
  variant: CardVariant;
}

const CardImageBackground: React.FC<CardImageBackgroundProps> = ({
  article,
  variant = CardVariant.NORMAL,
}) => {
  const { title, excerpt, categories = [], featuredImage, slug } = article;

  const imageUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL || process.env.NEXT_PUBLIC_LOCALHOST_URL}${featuredImage.url}`;

  const cardClass = classNames(
    'group relative p-6 sm:p-16 flex flex-col justify-end rounded-xl shadow-2xl',
    {
      'h-[60vh]': variant === CardVariant.NORMAL,
      'h-[40vh] sm:h-full ': variant === CardVariant.COMPACT,
    },
  );

  const cardBodyClass = classNames('z-0 w-full flex flex-col gap-2 sm:gap-4', {
    'lg:w-3/4 sm:gap-6': variant === CardVariant.NORMAL,
  });

  return (
    <section className={cardClass}>
      <ImageOverlay />
      <Image
        priority
        src={imageUrl}
        alt={`Thumbnail image for ${title}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="-z-10 object-cover rounded-xl"
      />

      <article className={cardBodyClass}>
        <header className="flex gap-2 sm:gap-4">
          <Tags
            categories={categories}
            size={variant === CardVariant.NORMAL ? Size.LG : Size.MD}
          />
        </header>
        <main className="flex flex-col gap-4">
          <Link href={`${Routes.ROOT}${slug}`}>
            <CardHeading title={title} variant={variant} />
          </Link>
          <CardExcerpt excerpt={excerpt} variant={variant} />
        </main>
      </article>
    </section>
  );
};

export default CardImageBackground;
