import * as React from "react";
import { graphql } from "gatsby";
import { mapEdges } from "../hooks/useSanity";

import Layout from "../components/Layout";
import { Container, StyledSection } from "../style/componentLibrary";
import Preview from "../components/Preview";
import { EdgeType, Post, SiteSettings } from "../types/sanity";
import Seo from "../components/Seo";

type IndexProps = {
  data: {
    siteSettings: EdgeType<SiteSettings>;
    posts: Post[];
  };
};

const IndexPage = ({ data }: IndexProps) => {
  const siteSettingsNode = data.siteSettings.edges[0].node;
  const postPreviews = mapEdges(data.posts);

  return (
    <Layout siteSettings={siteSettingsNode}>
      <Container css={{ mt: "2rem" }}>
        <StyledSection css={{ spaceY: "2rem" }}>
          {postPreviews.map((post: Post) => (
            <Preview key={post._id} post={post} />
          ))}
        </StyledSection>
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    posts: allSanityPost {
      edges {
        node {
          ...PostPreview
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

export const Head = ({ data }: IndexProps) => {
  const siteSettingsNode = data.siteSettings.edges[0].node;

  return (
    <>
      <Seo siteSettings={siteSettingsNode} seo={siteSettingsNode}></Seo>
    </>
  );
};
