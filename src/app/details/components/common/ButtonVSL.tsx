import React from "react";

interface Props {
  value?: string;
}

export const ButtonVSL: React.FC<Props> = ({ value }) => {
  return (
    <button
      className="p-2 md:text-lg lg:text-xl rounded-xl w-full max-w-52 text-white"
      style={{
        background: "linear-gradient(to right, #00b4ff, #0083ff)",
      }}
    >
      {value || "Boton"}
    </button>
  );
};
