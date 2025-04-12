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
    socialProofTexts[product.key] || "Miles ya lo están usando";

  return (
    <div className="mt-10">
      <HeroSection product={product} socialText={socialText} />
      <SocialProofSection />
      <ProblemSolutionSection product={product} />
      <FeaturesSection product={product} />
      <PersonalNote product={product} />
      <PricingSection product={product} />
      <FAQSection product={product} />
      <SuccessCasesSection />
    </div>
  );
}
