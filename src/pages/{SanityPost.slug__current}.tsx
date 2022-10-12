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
import SanityMarkdown from "../components/Sanity/SanityMarkdown";

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

        {!post.useMarkdown && <BlockContent content={post._rawBody} />}
        {post.useMarkdown && <SanityMarkdown content={post.content} />}

        <Flex tags css={{ mt: "3rem" }} columnMobile>
          <StyledAnchor underline href={twitterUrl} target="_blank">
            Tweet this article
          </StyledAnchor>
          <StyledAnchor
            underline
            href="https://github.com/bytesbase/theuncommonbyte"
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
  const { seo } = post;
  const siteSettingsNode = siteSettings.edges[0].node;

  const faqStructure = useFaqStructure(seo.faq);

  const jsonLd = {
    "@context": "https://schema.org",
    ...(faqStructure && { ...faqStructure }),
  };

  return (
    <>
      <Seo post={post} siteSettings={siteSettingsNode} seo={seo}>
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
      content
      useMarkdown
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
      author {
        name
        socialLink
      }
      categories {
        title
      }
      publishedAt
      ...Seo
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
