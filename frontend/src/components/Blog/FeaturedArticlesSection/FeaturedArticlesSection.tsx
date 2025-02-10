import React from 'react';

import { CardVariant } from '@/lib/enums';
import { IArticle } from '@/lib/interfaces';

import { CardImageBackground, CardSlim } from '@/components/Card';
import { SectionHeader } from '@/components/Elements';

interface FeaturedArticlesSectionProps {
  articles: IArticle[];
}

const FeaturedArticlesSection: React.FC<FeaturedArticlesSectionProps> = ({
  articles,
}) => {
  return (
    <section className="flex flex-col gap-8 md:gap-16">
      <SectionHeader heading="Featured Articles" />

      <main className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 xl:gap-16">
        <div className="row-span-2">
          <CardImageBackground
            article={articles[0]}
            variant={CardVariant.COMPACT}
          />
        </div>
        <div className="row-span-1">
          <CardSlim article={articles[1]} />
        </div>
        <div className="row-span-1">
          <CardSlim article={articles[2]} />
        </div>
      </main>
    </section>
  );
};

export default FeaturedArticlesSection;
