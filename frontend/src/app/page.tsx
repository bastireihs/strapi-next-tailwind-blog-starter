import { JSX } from 'react';

import { CardVariant } from '@/lib/enums';
import { ArticleService } from '@/lib/services';

import {
  RecentArticlesSection,
  FeaturedArticlesSection,
} from '@/components/Blog';
import { CardImageBackground } from '@/components/Card';
import { NoArticlesMessage } from '@/components/Elements';

const articleService = new ArticleService();

export default async function Blog(): Promise<JSX.Element> {
  const sortedArticles = await articleService.fetchAndSortArticles();
  const { latestArticle, featuredArticles, recentArticles } =
    articleService.getArticleSections(sortedArticles);

  if (
    !latestArticle &&
    featuredArticles.length === 0 &&
    recentArticles.length === 0
  ) {
    return <NoArticlesMessage />;
  }

  return (
    <>
      {latestArticle && (
        <CardImageBackground
          article={latestArticle}
          variant={CardVariant.NORMAL}
        />
      )}
      {featuredArticles.length > 0 && (
        <FeaturedArticlesSection articles={featuredArticles} />
      )}
      {recentArticles.length > 0 && (
        <RecentArticlesSection articles={recentArticles} />
      )}
    </>
  );
}
