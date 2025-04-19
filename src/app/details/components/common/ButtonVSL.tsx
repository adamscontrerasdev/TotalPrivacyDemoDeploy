import React from "react";

interface Props {
  value?: string;
  sm?: boolean;
}

export const ButtonVSL: React.FC<Props> = ({ value, sm }) => {
  return (
    <button
      className={`p-2 rounded-xl w-full  text-white ${sm ? "max-w-32" : "md:text-lg lg:text-xl max-w-52"}`}
      style={{
        background: "linear-gradient(to right, #00b4ff, #0083ff)",
      }}
    >
      {value || "Boton"}
    </button>
  );
};
