
export interface NewsItem {
  id: string;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PortfolioLink {
  name: string;
  url: string;
  description: string;
}
