import { graphql } from "gatsby";
import { getSrc } from "gatsby-plugin-image";
import React from "react";
import {
  Faq,
  Post,
  SanityAsset,
  SEOTypes,
  SiteSettings,
} from "../types/sanity";

type Props = {
  siteSettings: Pick<SiteSettings, "siteName" | "twitterHandle">;
  post?: Pick<Post, "title" | "slug" | "mainImage">;
  seo: SEOTypes;
} & React.PropsWithChildren;

export default function Seo(props: Props) {
  const { seo, siteSettings, post } = props;

  const { seoDescription, seoKeywords, seoImage, twitterAlt } = seo;
  const { siteName, twitterHandle } = siteSettings;
  const title = post?.title ?? siteName;
  const slug = post?.slug?.current ?? "";
  const image = seoImage
    ? seoImage.asset.gatsbyImageData
    : post?.mainImage?.image.asset.gatsbyImageData;

  return (
    <>
      <title>{title}</title>
      <meta name="keywords" content={seoKeywords} />
      <meta property="image" content={getSrc(image)} />
      <meta name="description" content={seoDescription} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={getSrc(image)} />

      <meta property="og:image:width" content="2500" />
      <meta property="og:image:height" content="1330" />
      <meta
        property="og:url"
        itemProp="url"
        content={`https://www.theuncommonbyte.com/${slug ?? ""}`}
      />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={getSrc(image)} />
      <meta name="twitter:alt" content={twitterAlt ?? "Development blog"} />

      {props.children}
    </>
  );
}

export const query = graphql`
  fragment Seo on SanityPost {
    seo {
      faq {
        faqItems {
          question
          answer
        }
      }
      seoDescription
      seoKeywords
      twitterAlt
      seoImage {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`;
