import React from 'react';
import Link from 'next/link';

import { Routes } from '@/lib/enums';
import { IArticle } from '@/lib/interfaces';

import { SectionHeader } from '@/components/Elements';
import { LayoutGrid } from '@/components/Layout';

import ArticleCardList from '../ArticleCardList';

interface RecentArticlesSectionProps {
  articles: IArticle[];
}

const RecentArticlesSection: React.FC<RecentArticlesSectionProps> = ({
  articles,
}) => {
  return (
    <section className="flex flex-col gap-16">
      <SectionHeader heading="Recent Articles">
        <Link
          href={`${Routes.CATEGORIES}/all`}
          className="text-accent underline underline-offset-2 text-base md:text-2xl"
        >
          view all
        </Link>
      </SectionHeader>

      <LayoutGrid>
        <ArticleCardList articles={articles} />
      </LayoutGrid>
    </section>
  );
};

export default RecentArticlesSection;
