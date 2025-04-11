import React from "react";

interface Props {
  text: string;
}

export const Subtitle: React.FC<Props> = ({ text }) => {
  const normalizeText = " text-sm md:text-md lg:text-lg xl:text-xl";

  return (
    <h2 className={`leading-relaxed ${normalizeText} xl:max-w-xl`}>{text}</h2>
  );
};
