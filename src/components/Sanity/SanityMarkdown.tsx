import React from 'react'
import ReactMarkdown from 'react-markdown'

import { styled } from '../../../stitches.config';
import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'

type Props = {
    content: string
}

const MarkdownContentContainer = styled(ReactMarkdown, {
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
    "& code:not([class])": {
        position: "relative",
        display: "inline",
        fontSize: "0.9em",
        letterSpacing: "-0.5px",
        padding: "4.5px 6px",
        margin: "1px -1px",
        background: "rgba(115, 125, 140, 0.17)",
        borderRadius: "3px",
        "-webkit-box-decoration-break": "clone",
    },
    "& [class*='language-']": {
        fontSize: "$code",
        my: "2rem"
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

const SanityMarkdown = ({ content }: Props) => {
    return <MarkdownContentContainer rehypePlugins={[rehypePrism]} remarkPlugins={[remarkGfm]}>{content}</MarkdownContentContainer>
}

const HighlightedCodeContainer = styled('code', {
    position: "relative",
    display: "inline",
    fontSize: "0.9em",
    letterSpacing: "-0.5px",
    padding: "4.5px 6px",
    margin: "1px -1px",
    background: "rgba(115, 125, 140, 0.17)",
    borderRadius: "3px",
    "-webkit-box-decoration-break": "clone",
})

const HighlightedCode = () => {
    return <HighlightedCodeContainer>Highlighted Code</HighlightedCodeContainer>
}

export default SanityMarkdown