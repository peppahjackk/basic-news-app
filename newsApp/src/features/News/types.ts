export interface Article {
  title: string;
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  url: string;
  urlToImage: string;
}
