import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  color?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
  color = "#b5b5b5a4",
}) => {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent ${!disabled ? "animate-[shine_linear_infinite]" : ""} ${className}`}
      style={{
        color: color,
        backgroundImage:
          "linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 60%)",
        backgroundSize: "200% 100%",
        animationDuration: `${speed}s`,
      }}
    >
      {text}
      <style>{`
  @keyframes shine {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`}</style>
    </span>
  );
};

export default ShinyText;
