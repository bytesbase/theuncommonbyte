import React, { useEffect } from "react";
import { styled } from "../../../stitches.config";
import { Flex, StyledSpan } from "../../style/componentLibrary";
import { SanityAsset } from "../../types/sanity";
import SanityImage from "./SanityImage";

const BlockImageContainer = styled("div", {
  display: "flex",
});

type Props = {
  hide?: boolean;
  value: {
    image: SanityAsset;
    caption: string;
  };
};

export default function LocationItem({ value, hide }: Props) {
  return (
    <BlockImageContainer>
      {!hide && (
        <Flex css={{ spaceY: "1rem" }} column items="center">
          <SanityImage image={value.image} />
          <StyledSpan css={{ opacity: "0.5" }} italic>
            {value.caption}
          </StyledSpan>
        </Flex>
      )}
    </BlockImageContainer>
  );
}
