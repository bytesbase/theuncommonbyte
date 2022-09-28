import { Faq } from "../types/sanity";

export function useFaqStructure(faq: Faq) {
  if (!faq) return;
  const structuredData = faq.faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

  return {
    "@type": "FAQPage",
    mainEntity: structuredData,
  };
}
