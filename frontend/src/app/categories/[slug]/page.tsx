import React from 'react';

import { ArticleService, CategoryService } from '@/lib/services';

import { ArticleCardList } from '@/components/Blog';
import { CategoryTab, NoArticlesMessage } from '@/components/Elements';
import { LayoutGrid } from '@/components/Layout';

const articleService = new ArticleService();
const categoryService = new CategoryService();

interface CategoryPageProps {
  params: { slug: string };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const { slug } = params;
  const categorySlug = slug as string;

  const fetchedArticles = await articleService.fetchArticles();
  const filteredArticles = categoryService.filterArticlesByCategory(
    fetchedArticles,
    categorySlug,
  );
  const allCategories = categoryService.getAllCategoryNames(fetchedArticles);

  return (
    <section className="relative flex flex-col items-center gap-16 pt-8">
      <header className="z-30 fixed top-[55px] sm:top-[96px] pb-4 px-4 rounded-b-3xl flex flex-wrap justify-center gap-4 bg-light dark:bg-dark">
        {allCategories.map((category, index) => (
          <CategoryTab
            key={index}
            category={category}
            isActive={categorySlug === category}
          />
        ))}
      </header>

      <LayoutGrid>
        {filteredArticles.length > 0 ? (
          <ArticleCardList articles={filteredArticles} />
        ) : (
          <NoArticlesMessage />
        )}
      </LayoutGrid>
    </section>
  );
};

export default CategoryPage;
