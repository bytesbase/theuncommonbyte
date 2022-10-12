import React from "react";
import {
  PortableText,
  PortableTextComponentProps,
  PortableTextMarkComponentProps,
} from "@portabletext/react";
import BlockImage from "./BlockImage";
import { SanityBlockContent } from "../../types/sanity";
import { styled } from "../../../stitches.config";
import BlockCode from "./BlockCode";

type BlockContentProps = {
  itemProp?: string;
  content: SanityBlockContent;
  fontSize?: "xs" | "small" | "normal" | "postText" | "large" | "xl";
};

const BlockContentContainer = styled("div", {
  lineHeight: "1.8",
  "& p, ul, ol": {
    color: "$text",
    fontSize: "$postText",
    mb: "1.5rem",
    fontFamily: "$secondary",
    "@media print": {
      my: ".2rem",
      fontSize: "12px !important",
    },
    "& > a": {
      textDecoration: "underline",
      color: "$link",
    },
  },
  
  ol: {
    listStyle: "decimal",
    listStylePosition: "inside",
  },
  ul: {
    listStyle: "disc",
    listStylePosition: "inside",
  },
  "& h2, h3, h4, h5": {
    my: "1rem",
    fontFamily: "$secondary",
  },
  variants: {
    fontSize: {
      xs: {
        "& p, ul, ol": {
          fontSize: "$xs",
        },
      },
      small: {
        "& p, ul, ol": {
          fontSize: "$small",
        },
      },
      normal: {
        "& p, ul, ol": {
          fontSize: "$normal",
        },
      },
      postText: {
        "& p, ul, ol": {
          fontSize: "$postText",
        },
      },
      large: {
        "& p, ul, ol": {
          fontSize: "$large",
        },
      },
      xl: {
        "& p, ul, ol": {
          fontSize: "$xl",
        },
      },
    },
  },
});
const blockContentSerializers = {
  types: {
    blockImage: BlockImage,
    code: BlockCode,
  },
  marks: {},
  list: {
    bullet: ({ children }: PortableTextComponentProps<any>) => (
      <ul className="listItems">{children}</ul>
    ),
  },
};

export default function BlockContent({
  content,
  fontSize,
  itemProp,
}: BlockContentProps) {
  blockContentSerializers.marks = {
    link: ({ children, value }: PortableTextMarkComponentProps<any>) => {
      const { blank, href } = value;
      const handleLinkClick = () => {};
      return blank ? (
        <a href={href} target="_blank" rel="noopener" onClick={handleLinkClick}>
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
  };

  return (
    <BlockContentContainer fontSize={fontSize} itemProp={itemProp}>
      <PortableText value={content} components={blockContentSerializers} />
    </BlockContentContainer>
  );
}
