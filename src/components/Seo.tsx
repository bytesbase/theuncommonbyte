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
  mainImage?: SanityAsset;
  siteSettings: Pick<SiteSettings, "siteName">;
  seo: SEOTypes;
} & React.PropsWithChildren;

export default function Seo(props: Props) {
  const { seo, siteSettings, mainImage } = props;
  const { seoTitle, seoDescription, seoKeywords, seoImage, slug } = seo;
  const { siteName } = siteSettings;

  const image = seoImage
    ? seoImage.asset.gatsbyImageData
    : mainImage?.asset.gatsbyImageData;

  return (
    <>
      <meta name="description" content={seoDescription} />

      <title>{seoTitle}</title>
      <meta name="keywords" content={seoKeywords} />

      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={getSrc(image)} />

      <meta property="og:image:width" content="2500" />
      <meta property="og:image:height" content="1330" />
      <meta
        property="og:url"
        itemProp="url"
        content={`https://www.theuncommonbyte.com/${slug?.current ?? ""}`}
      />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={getSrc(image)} />

      {props.children}
    </>
  );
}