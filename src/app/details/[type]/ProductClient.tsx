import { Product } from "@/app/Elements";
import React from "react";
import {
  HeroSection,
  ProblemSolutionSection,
  SocialProofSection,
  FeaturesSection,
  PersonalNote,
  PricingSection,
  FAQSection,
  SuccessCasesSection,
  FinalCTASection,
  FooterSection,
} from "../Sections";

interface Props {
  product: Product;
}

export default function ProductClient({ product }: Props) {
  const socialProofTexts: Record<string, string> = {
    grapheneos: "+124 profesionales ya lo están usando",
    "Blinda-mac": "Más de 230 personas aprendieron con este curso",
  };

  const socialText =
    socialProofTexts[product.key || ""] || "Miles ya lo están usando";

  return (
    <div className="mt-10">
      <HeroSection product={product} socialText={socialText} />
      {product.testimonios && <SocialProofSection product={product} />}
      {product.problem && product.solution && (
        <ProblemSolutionSection product={product} />
      )}
      {product.features && <FeaturesSection product={product} />}
      {product.personalNote && <PersonalNote product={product} />}
      {product.pricing && <PricingSection product={product} />}
      {product.faq && <FAQSection product={product} />}
      {product.SuccessCasesSection && <SuccessCasesSection product={product} />}
      {product.finalCTA && <FinalCTASection product={product} />}
      <FooterSection />
    </div>
  );
}
