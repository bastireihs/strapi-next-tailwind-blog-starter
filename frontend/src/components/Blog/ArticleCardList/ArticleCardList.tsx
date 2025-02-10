import React from 'react';

import { IArticle } from '@/lib/interfaces';

import { CardGrid } from '@/components/Card';

interface ArticleCardListProps {
  articles: IArticle[];
}

const ArticleCardList: React.FC<ArticleCardListProps> = ({ articles }) => {
  const renderCards = () => {
    return articles.map((article, index) => (
      <CardGrid key={index} article={article} />
    ));
  };

  return renderCards();
};

export default ArticleCardList;
