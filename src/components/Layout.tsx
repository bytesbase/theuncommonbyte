import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { styled } from "../../stitches.config";
import { SiteSettings } from "../types/sanity";
import { graphql } from "gatsby";

type Props = {
  children: React.ReactNode;
  siteSettings: SiteSettings;
};

const StyledLayout = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: "100vh",
  "& > main": {
    flexGrow: 1,
    display: "flex",
  },
});

const Layout = ({ children, siteSettings }: Props) => {
  const { logoText, socialLinks } = siteSettings;
  return (
    <StyledLayout>
      <Header logo={logoText} />
      <main>{children}</main>
      <Footer socialLinks={socialLinks} logoName={logoText} />
    </StyledLayout>
  );
};

export const query = graphql`
  fragment SiteInformation on SanitySiteSettings {
    siteName
    logoText
    seoDescription
    seoKeywords
    seoTitle
    seoImage {
      asset {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
    navigation {
      name
      slug
      externalLink
      isButton
    }
    socialLinks {
      platform
      url
    }
  }
`;

export default Layout;
