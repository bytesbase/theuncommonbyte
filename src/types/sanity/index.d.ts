import type { PortableTextBlock } from "@portabletext/types";

type SanityAsset = {
  asset: {
    url: string;
    gatsbyImageData: IGatsbyImageData;
  };
};

type SanityImage = {
  image: SanityAsset;
  alt: string;
};

export type SanityBlockContent = PortableTextBlock[];
export type EdgeType<T> = {
  edges: {
    node: T;
  }[];
};

export type NavigationItem = {
  name: string;
  slug: string;
  externalLink: string;
  isButton: string;
};

export type SocialLinkItem = {
  platform: string;
  url: string;
};

export type SiteSettings = {
  siteName: string;
  logoText: string;
  twitterHandle: string;
  navigation: NavigationItem[];
  socialLinks: SocialLinkItem[];
} & SEOTypes;

export type SEOTypes = {
  slug: {
    current: string;
  };
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  seoImage: SanityAsset;
  twitterAlt: string;
  author: {
    name: string;
    socialLink: string;
  };
};

export type Post = {
  _id: string;
  title: string;
  mainImage: SanityImage;
  categories: string;
  _rawBody: SanityBlockContent;
  _rawBlurb: SanityBlockContent;
  publishedAt: Date;
  faq: Faq;
} & SEOTypes;

export type SanityPost = {
  data: {
    post: Post;
    siteSettings: EdgeType<SiteSettings>;
  };
};

export type Faq = {
  faqItems: {
    question: string;
    answer: string;
  }[];
};
