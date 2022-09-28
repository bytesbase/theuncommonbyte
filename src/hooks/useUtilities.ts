import { SanityBlockContent } from "../types/sanity";

import dayjs from "dayjs";

const useBlockContentInText = (blocks: SanityBlockContent) => {
  if (!blocks) return;
  return (
    blocks
      // loop through each block
      .map((block) => {
        // if it's not a text block with children,
        // return nothing
        if (block._type !== "block" || !block.children) {
          return "";
        }
        // loop through the children spans, and join the
        // text strings
        return block.children.map((child) => child.text).join("");
      })
      // join the paragraphs leaving split by two linebreaks
      .join("\n\n")
  );
};

export const useSlug = (text: string) =>
  text.split(" ").join("-").toLocaleLowerCase();

export const useFormattedDate = (date: Date) =>
  dayjs(date).format("MMMM d YYYY");

export const useReadTime = (text: SanityBlockContent) => {
  const plainText =
    useBlockContentInText(text)?.trim().split(/\s+/).length ?? 0;
  const wpm = 125;

  return `${Math.ceil(plainText / wpm)} min read time`;
};
