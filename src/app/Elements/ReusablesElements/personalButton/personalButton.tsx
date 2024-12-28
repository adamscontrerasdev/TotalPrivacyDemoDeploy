import React from "react";

interface PersonalButtonProps {
  value?: string;
  color?: string;
  ref?: React.Ref<HTMLButtonElement>;
  className?: string;
}

export const PersonalButton: React.FC<PersonalButtonProps> = ({
  value,
  color,
  ref,
  className,
}) => {
  return (
    <button
      className={`relative text-${color} p-5 bg-transparent text-xl ${className}`}
      ref={ref}
    >
      {value}
      {/* Línea inferior separada */}
      <span
        className="absolute left-0 bottom-0 w-full h-[2px] bg-white"
        style={{
          boxShadow: "0 5px 10px rgba(255, 255, 255, 0.3)", // Sombra en la línea
        }}
      />
    </button>
  );
};
