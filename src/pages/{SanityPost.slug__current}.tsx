import { graphql } from "gatsby";
import React from "react";
import BlockContent from "../components/Sanity/BlockContent";
import Layout from "../components/Layout";
import { SanityPost } from "../types/sanity";
import {
  Container,
  Flex,
  StyledAnchor,
  StyledGatsbyImage,
  StyledH1,
} from "../style/componentLibrary";
import { useFaqStructure } from "../hooks/useStructuredData";
import { useFormattedDate, useReadTime } from "../hooks/useUtilities";
import Seo from "../components/Seo";
import * as Fathom from "fathom-client";

export default function page({ data }: SanityPost) {
  const { post, siteSettings } = data;
  const { author } = data.post;
  const siteSettingsNode = siteSettings.edges[0].node;
  const twitterUrl = `https://twitter.com/intent/tweet?url=https://theuncommonbyte.com/${post.slug.current}&text="${post.title}" by ${siteSettingsNode.twitterHandle}`;

  const handleTrackGoal = (goalCode: string) => {
    if (process.env.NODE_ENV === "production") Fathom.trackGoal(goalCode, 0);
  };

  return (
    <Layout siteSettings={siteSettingsNode}>
      <Container>
        <StyledGatsbyImage
          rounded
          css={{
            height: "200px",
            my: "2rem",
          }}
          image={post.mainImage.image.asset.gatsbyImageData}
          alt={post.mainImage.alt}
        />

        <StyledH1 marked="orange">{post.title}</StyledH1>

        <Flex css={{ mt: "1rem", mb: "2rem" }} tags>
          <div>
            {useFormattedDate(post.publishedAt)} // {useReadTime(post._rawBody)}{" "}
            // written by{" "}
            <StyledAnchor underline href={author.socialLink} target="_blank">
              {author.name}
            </StyledAnchor>
          </div>
        </Flex>

        <BlockContent content={post._rawBody} />

        <Flex tags css={{ mt: "3rem" }} columnMobile>
          <StyledAnchor underline href={twitterUrl} target="_blank">
            Tweet this article
          </StyledAnchor>
          <StyledAnchor
            underline
            href="https://github.com/bytesbase/theuncommonbyte-www"
            target="_blank"
            onClick={() => handleTrackGoal("AZTKD64E")}
          >
            View source code
          </StyledAnchor>
        </Flex>
      </Container>
    </Layout>
  );
}

export const Head = ({ data }: SanityPost) => {
  const { post, siteSettings } = data;
  const siteSettingsNode = siteSettings.edges[0].node;

  const faqStructure = useFaqStructure(post.faq);

  const jsonLd = {
    "@context": "https://schema.org",
    ...(faqStructure && { ...faqStructure }),
  };

  return (
    <>
      <Seo
        mainImage={post.mainImage.image}
        siteSettings={siteSettingsNode}
        seo={post}
      >
        {faqStructure && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd),
            }}
          />
        )}
      </Seo>
    </>
  );
};

export const query = graphql`
  query ($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      _id
      title
      _rawBody
      slug {
        current
      }
      mainImage {
        alt
        image {
          asset {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      seoTitle
      seoDescription
      seoKeywords
      twitterAlt
      seoImage {
        asset {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
      author {
        name
        socialLink
      }
      categories {
        title
      }
      publishedAt
      faq {
        faqItems {
          question
          answer
        }
      }
    }
    siteSettings: allSanitySiteSettings {
      edges {
        node {
          ...SiteInformation
        }
      }
    }
  }
`;
