import React from "react";
import { styled } from "../../../stitches.config";
import { SanityAsset } from "../../types/sanity";
import Image from "gatsby-plugin-sanity-image";

type SanityImageProps = {
  objectFit?: boolean;
  size?: number;
  image: SanityAsset;
  css?: any;
};

const Img = styled("img", {
  width: "100%",
  height: "100%",
  variants: {
    objectFit: {
      true: {
        objectFit: "cover",
      },
    },
  },
});

export default function SanityImage({
  image,
  css = {},
  size,
  objectFit,
}: SanityImageProps) {
  return (
    <Image
      {...image}
      width={500}
      height={300}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  );
}
