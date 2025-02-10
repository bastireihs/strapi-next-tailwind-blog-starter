import IArticle from './article.interface';

export default interface ICategory {
  id: string;
  documentId: string;
  name: string;
  slug: string;
  articles: IArticle[];
}
