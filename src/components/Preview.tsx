import { graphql, Link } from "gatsby";
import React from "react";
import { useFormattedDate, useReadTime } from "../hooks/useUtilities";
import { Flex, StyledGatsbyLink, StyledH2 } from "../style/componentLibrary";
import { Post } from "../types/sanity";
import BlockContent from "./Sanity/BlockContent";

type PreviewProps = {
  post: Post;
};

function Preview({ post }: PreviewProps) {
  return (
    <StyledGatsbyLink
      css={{ spaceY: "0.5rem" }}
      block
      key={post.slug?.current}
      to={post.slug.current}
    >
      <Flex css={{ mb: "0.5rem" }} tags>
        <div>{useFormattedDate(post.publishedAt)}</div>
        <span>//</span>
        <div>{useReadTime(post._rawBody)}</div>
      </Flex>
      <StyledH2 marked="orange">{post.title}</StyledH2>
      <BlockContent content={post._rawBlurb} />
    </StyledGatsbyLink>
  );
}

export const query = graphql`
  fragment PostPreview on SanityPost {
    _id
    title
    _rawBlurb
    _rawBody
    publishedAt
    slug {
      current
    }
  }
`;

export default Preview;
