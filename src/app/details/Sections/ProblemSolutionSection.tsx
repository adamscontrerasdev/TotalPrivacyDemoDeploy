import React from "react";
import { ContainerSections } from "../components";
import { Product } from "@/app/Elements";
import { Line } from "../components/common/Line";

interface ProblemOrSolutionProps {
  content?: { title: string; content: string };
}

const ProblemOrSolution: React.FC<ProblemOrSolutionProps> = ({ content }) => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-start p-6 text-white gap-3">
      <h2 className="text-xl font-bold text-left">
        {content && content.title}
      </h2>
      <p className="text-left text-xs md:text-base text-neutral-300">
        {content && content.content}
      </p>
    </div>
  );
};

interface Props {
  product?: Product;
}

export const ProblemSolutionSection: React.FC<Props> = ({ product }) => {
  const contentArray = product
    ? [product.problem, product.solution].filter(Boolean)
    : [];

  if (!contentArray.length) return null;

  return (
    <ContainerSections>
      <Line color="#0083ff" />
      <div className="w-full flex flex-col sm:flex-row items-start justify-center max-w-7xl">
        {contentArray.map((block, index) => (
          <ProblemOrSolution key={index} content={block} />
        ))}
      </div>
      <Line color="#0083ff" />
    </ContainerSections>
  );
};
