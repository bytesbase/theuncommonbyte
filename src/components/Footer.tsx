import React from "react";

import Icon from "./Icon";

import { styled } from "../../stitches.config";
import { Container, Flex, StyledAnchor } from "../style/componentLibrary";
import { SocialLinkItem } from "../types/sanity";
import { ThemeContext } from "../contexts/themeContext";

const FooterComp = styled("footer", {
  mt: "2rem",
  display: "flex",
  alignItems: "center",
  py: "2rem",
  "@bp2": {
    py: "0",
    height: "100px",
  },
  "& > div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "@bp2": {
      justifyContent: "space-between",
      flexDirection: "row",
    },
  },
});

type Props = {
  socialLinks: SocialLinkItem[];
  logoName: string;
};

const Copyright = styled("div", {
  fontFamily: "$primary",
  fontSize: "$small",
});

const FooterNav = styled("ul", {
  fontFamily: "$primary",
  fontSize: "$small",
  listStyle: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0",
  color: "$text",
});

export default function Footer({
  socialLinks,
  logoName,
}: Props): React.ReactElement {
  const currentYear = new Date().getFullYear();
  const { colorMode } = React.useContext(ThemeContext);
  const iconColor = colorMode === "dark" ? "white" : "black";
  return (
    <FooterComp>
      <Container
        css={{
          spaceY: "1rem",
          "@bp2": {
            spaceY: "0",
          },
        }}
      >
        <Flex>
          {socialLinks &&
            socialLinks.map((link) => (
              <a href={link.url} target="_blank" key={link.url}>
                <Icon name={link.platform} fill={iconColor} />
              </a>
            ))}
        </Flex>

        <Copyright>
          © {currentYear} {logoName}
        </Copyright>

        <FooterNav>
          <li>
            <StyledAnchor underline href="mailto:vincent@bytesbase.com">
              Contact
            </StyledAnchor>
          </li>
        </FooterNav>
      </Container>
    </FooterComp>
  );
}
