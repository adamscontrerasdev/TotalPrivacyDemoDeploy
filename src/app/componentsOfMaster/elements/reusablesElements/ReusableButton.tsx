import React, { forwardRef } from "react";

interface ButtonProps {
  value: string; // Cambiado a string en minúscula
  bg?: string;
  color: string;
  className?: string;
  shadow?: boolean;
  onMouseEnter?: () => void; // Cambiado a onMouseEnter para manejar el hover
  onMouseLeave?: () => void;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
  onClick?: () => void;
  onTouchStart?: () => void;
  onTouchEnd?: () => void;
}

const ReusableButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      value,
      bg,
      color,
      shadow,
      className,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseUp,
      onClick,
      onTouchStart,
      onTouchEnd,
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        style={{
          background: bg ? bg : "#0003",
          position: "relative",
          color: color, // Cambia a color pasado por props
          borderRadius: "10px",
          padding: "10px 20px",
          backdropFilter: "blur(5px)",
          cursor: "pointer",
          textShadow: shadow ? `0px 0px 10px #fff` : "none",
          boxShadow: shadow ? `0px 0px 50px ${bg}` : "none",
          zIndex: 999,
          fontSize: "1.2em",
          transition: "all .5s",
          width: "auto",
        }}
        className={className}
        onMouseEnter={onMouseEnter}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp} // Maneja el evento de mouse
        onMouseLeave={onMouseLeave}
        onClick={onClick} // Maneja el evento de salir del mouse
        onTouchStart={onTouchStart} // Maneja el evento de touch
        onTouchEnd={onTouchEnd}
      >
        {value}
      </button>
    );
  },
);
ReusableButton.displayName = "ReusableButton";

export default ReusableButton;
