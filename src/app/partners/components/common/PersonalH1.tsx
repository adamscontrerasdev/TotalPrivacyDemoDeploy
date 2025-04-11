import React from "react";

interface PersonalH1Props {
  value?: string;
  bold?: boolean;
  center?: boolean;
  noP?: boolean;
}

const PersonalH1: React.FC<PersonalH1Props> = ({
  value = "Muestra de un titulo ",
  bold = false,
  center = false,
  noP = false,
}) => {
  return (
    <h1
      className={`text-transparent bg-clip-text text-2xl sm:text-4xl 2xl:text-5xl w-full lg:max-w-4xl xl:max-w-4xl bg-gradient-to-b from-white via-white to-transparent py-1  ${
        noP ? "" : "px-3"
      }`}
      style={{
        fontWeight: bold ? "bold" : "normal",
        textAlign: center ? "center" : "left",
      }}
    >
      {value}
    </h1>
  );
};

export default PersonalH1;
