import { ApiEndpoints } from '@/lib/enums';
import { IArticle, ICategory } from '@/lib/interfaces';

import ApiService from '../api-service';

class CategoryService extends ApiService {
  public async fetchCategories(): Promise<ICategory[]> {
    return this.fetchAll<ICategory>(ApiEndpoints.CATEGORIES);
  }

  public filterArticlesByCategory(
    articles: IArticle[],
    slug: string,
  ): IArticle[] {
    return articles.filter((article) => {
      if (slug === 'all') {
        return true;
      }
      return article.categories?.some((category) => category.name === slug);
    });
  }

  public getAllCategoryNames(
    articles: { categories?: { name: string }[] }[],
  ): string[] {
    const categories = ['all'];
    articles.forEach((article) => {
      article.categories?.forEach((category) => {
        if (!categories.includes(category.name)) {
          categories.push(category.name);
        }
      });
    });
    categories.sort();
    return categories;
  }
}

export default CategoryService;
