import moment from 'moment';

import { ApiEndpoints } from '@/lib/enums';
import { IArticle } from '@/lib/interfaces';

import ApiService from '../api-service';

interface ArticleSections {
  latestArticle: IArticle;
  featuredArticles: IArticle[];
  recentArticles: IArticle[];
}

class ArticleService extends ApiService {
  private apiService: ApiService;

  constructor(apiService?: ApiService) {
    super();

    this.apiService = apiService || new ApiService();
  }

  public async fetchArticles(): Promise<IArticle[]> {
    return this.fetchAll<IArticle>(ApiEndpoints.ARTICLES);
  }

  async fetchAndSortArticles(): Promise<IArticle[]> {
    const articles = await this.fetchArticles();
    return this.sortArticles(articles);
  }

  public async fetchArticle(articleId: string): Promise<IArticle> {
    const article = await this.fetchOne<IArticle>(
      `${ApiEndpoints.ARTICLES}/${articleId}?populate=*`,
      articleId,
    );
    if (!article) {
      throw new Error(`Article with ID ${articleId} not found`);
    }
    return article;
  }

  public async fetchArticleBySlug(slug: string): Promise<IArticle> {
    const article = await this.fetchOne<IArticle[]>(
      `${ApiEndpoints.ARTICLES}?filters[slug]=${slug}&populate=*`,
      slug,
    );
    if (!article || article.length === 0) {
      throw new Error(`Article with slug ${slug} not found`);
    }
    return article[0];
  }

  public getArticleSections(sortedArticles: IArticle[]): ArticleSections {
    const latestArticle = sortedArticles[0];
    const featuredArticles = sortedArticles.slice(1, 4);
    const recentArticles = sortedArticles.slice(4, 10);
    return { latestArticle, featuredArticles, recentArticles };
  }

  private sortArticles(articles: IArticle[]): IArticle[] {
    return articles
      .slice()
      .sort((a, b) => moment(b.publishedAt).diff(moment(a.publishedAt)));
  }
}

export default ArticleService;
