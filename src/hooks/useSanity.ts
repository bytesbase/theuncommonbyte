import { SanityBlockContent } from "../types/sanity";

export function mapEdges(obj) {
  const edges = Object.keys(obj).map((key) => {
    return obj[key];
  });

  const nodes = edges.map((edge) => edge.map((item) => item.node));

  return nodes[0];
}
