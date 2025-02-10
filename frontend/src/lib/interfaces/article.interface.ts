import { Status } from '../enums';
import ICategory from './category.interface';

export default interface IArticle {
  id: string;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  featuredImage: IFeaturedImage;
  categories?: ICategory[];
  locale: string;
  status: Status;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface IFeaturedImage {
  alternativeText: string;
  caption: string;
  id: string;
  documentId: string;
  name: string;
  width: number;
  height: number;
  formats: {
    thumbnail: {
      ext: string;
      hash: string;
      height: number;
      mime: string;
      name: string;
      path: string;
      size: number;
      sizeInBytes: number;
      url: string;
      width: number;
    };
    small: {
      ext: string;
      hash: string;
      height: number;
      mime: string;
      name: string;
      path: string;
      size: number;
      sizeInBytes: number;
      url: string;
      width: number;
    };
    medium: {
      ext: string;
      hash: string;
      height: number;
      mime: string;
      name: string;
      path: string;
      size: number;
      sizeInBytes: number;
      url: string;
      width: number;
    };
    large: {
      ext: string;
      hash: string;
      height: number;
      mime: string;
      name: string;
      path: string;
      size: number;
      sizeInBytes: number;
      url: string;
      width: number;
    };
  };
  url: string;
}
