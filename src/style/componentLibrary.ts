import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { styled } from "../../stitches.config";

const sharedVariants = {
  italic: {
    true: {
      fontStyle: "italic",
    },
  },
  underline: {
    true: {
      textDecoration: "underline",
    },
  },
  bold: {
    true: {
      fontWeight: "bold",
    },
  },
  center: {
    true: {
      textAlign: "center",
    },
  },
  marked: {
    orange: {
      width: "fit-content",
      background: "#FBEDE0",
      position: "relative",
      lineHeight: "1.5",
      display: "inline",
      whiteSpace: "pre-wrap",
      borderWidth: "0.25rem 0",
      "&:after": {
        content: "",
        position: "absolute",
        top: "-0.25rem",
        right: "100%",
        bottom: "-0.25rem",
        width: "0.25rem",
      },
    },
  },
  font: {
    primary: {
      fontFamily: "$primary",
    },
    primaryBold: {
      fontFamily: "$primaryBold",
    },
  },
  noPrint: {
    true: {
      "@media print": {
        display: "none",
      },
    },
  },
  hideMobile: {
    true: {
      display: "none",
      "@bp2": {
        display: "flex",
      },
    },
  },
};

export const Container = styled("div", {
  width: "100%",
  mx: "auto",
  px: "$medium",
  "@bp2": {
    maxWidth: "660px",
  },
});

export const PageContent = styled("div", {
  minHeight: "100vh",
  minWidth: "100%",
  display: "flex",
  justifyContent: "center",
  variants: {
    position: {
      center: { alignItems: "center" },
    },
  },
});

export const Grid = styled("div", {
  display: "grid",
  variants: {
    columns: {
      2: {
        gridColumn: 2,
      },
    },
  },
});

export const Logo = styled("div", {
  fontFamily: "$primary",
  // fontWeight: "bold",
});

export const Flex = styled("div", {
  display: "flex",
  variants: {
    noPrint: sharedVariants.noPrint,
    hideMobile: sharedVariants.hideMobile,
    tags: {
      true: {
        alignItems: "center",
        spaceY: "0.5rem",
        fontFamily: "$primary",
        fontSize: "$small",
        color: "$muted",
        "@bp2": {
          spaceY: "0",
          spaceX: "0.5rem",
        },
      },
    },
    grow: {
      true: { flexGrow: "1" },
    },
    mt: {
      small: { mt: "$small" },
      large: { mt: "$large" },
    },
    justify: {
      center: { justifyContent: "center" },
      between: { justifyContent: "space-between" },
      start: { justifyContent: "flex-start" },
      end: { justifyContent: "flex-end" },
    },
    direction: {
      column: { flexDirection: "column" },
    },
    column: {
      true: {
        flexDirection: "column",
      },
    },
    columnMobile: {
      true: {
        flexDirection: "column",
        "@bp2": {
          flexDirection: "row",
        },
      },
    },
    items: {
      start: { alignItems: "flex-start" },
      end: { alignItems: "flex-end" },
      between: { alignItems: "space-between" },
      center: { alignItems: "center" },
    },
    spaceX: {
      small: {
        "& > :nth-child(n+2)": {
          ml: "$small",
        },
      },
    },
    spaceY: {
      small: {
        "& > :nth-child(n+2)": {
          mt: "$medium",
        },
      },
      medium: {
        "& > :nth-child(n+2)": {
          mt: "4rem",
        },
      },
    },
  },
});

export const StyledText = styled("p", {
  variants: {
    noPrint: sharedVariants.noPrint,
    italic: sharedVariants.italic,
    underline: sharedVariants.underline,
    bold: sharedVariants.bold,
    center: sharedVariants.center,
    font: sharedVariants.font,
  },
});

export const StyledSpan = styled("span", {
  variants: {
    noPrint: sharedVariants.noPrint,
    hideMobile: sharedVariants.hideMobile,
    italic: sharedVariants.italic,
    underline: sharedVariants.underline,
    bold: sharedVariants.bold,
    center: sharedVariants.center,
    font: sharedVariants.font,
  },
});

export const StyledButton = styled("button", {
  background: "$dark",
  border: "2px solid white",
  color: "$invertedPrimary",
  fontSize: "$xs",
  px: "0.75rem",
  py: "0.5rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  cursor: "pointer",

  variants: {
    noPrint: sharedVariants.noPrint,
    icon: {
      true: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "none",
        padding: "0",
      },
    },
    selected: {
      true: {
        background: "$uncommongreen",
        border: "2px solid $uncommongreen",
      },
    },
  },
});

export const StyledAnchor = styled("a", {
  variants: {
    noPrint: sharedVariants.noPrint,
    underline: sharedVariants.underline,
    selected: {
      true: {
        color: "$uncommongreen",
      },
    },
  },
});

export const StyledH2 = styled("h2", {
  color: "#000",
  variants: {
    marked: sharedVariants.marked,
  },
});

export const StyledH1 = styled("h1", {
  color: "#000",
  mb: "1rem",
  variants: {
    marked: sharedVariants.marked,
  },
});

export const StyledSection = styled("section", {});

export const StyledGatsbyLink = styled(Link, {
  variants: {
    block: {
      true: {
        display: "block",
      },
    },
  },
});

export const StyledGatsbyImage = styled(GatsbyImage, {
  variants: {
    rounded: {
      true: {
        borderRadius: "2rem",
      },
    },
  },
});
