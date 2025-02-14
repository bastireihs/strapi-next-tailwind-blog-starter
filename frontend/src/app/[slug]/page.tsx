import { JSX } from 'react';

import { ArticleService } from '@/lib/services';

import { ArticleCardList, ArticleHeader } from '@/components/Blog';
import { MarkdownRenderer } from '@/components/Elements';

const articleService = new ArticleService();

interface BlogPageProps {
  params: { slug: string };
}

export default async function BlogPage({
  params,
}: BlogPageProps): Promise<JSX.Element> {
  const { slug } = params;
  const article = await articleService.fetchArticleBySlug(slug);
  const recentArticles = (await articleService.fetchArticles()).slice(1, 5);

  return (
    <article className="flex flex-col gap-8 sm:gap-20">
      <ArticleHeader article={article} />

      <section className="flex flex-col xl:flex-row gap-16">
        <main className="flex-2 lg:px-2">
          <MarkdownRenderer>{article.content}</MarkdownRenderer>
        </main>
        {recentArticles.length > 0 && (
          <aside className="flex-1 flex flex-col gap-12">
            <h3 className="font-os font-medium tracking-wider text-dark dark:text-light text-4xl">
              Recent articles
            </h3>
            <section className="flex flex-col gap-16">
              <ArticleCardList articles={recentArticles} />
            </section>
          </aside>
        )}
      </section>
    </article>
  );
}
