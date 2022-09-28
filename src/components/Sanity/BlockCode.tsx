import React, { useEffect } from "react";
import Prism from "prismjs";
import { styled } from "../../../stitches.config";

type Props = {
  value: {
    code: string;
    language: string;
  };
};

const StyledPre = styled("pre", {
  "&[class*='language-']": {
    fontSize: "$code",
  },
});

function BlockCode({ value }: Props) {
  const { code, language } = value;
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <StyledPre className={`language-${language}`}>
      <code className={`language-${language}`}>{code}</code>
    </StyledPre>
  );
}

export default BlockCode;
