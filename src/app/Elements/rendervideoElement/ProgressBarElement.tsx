import React from "react";

interface ProgressBarElementProps {
  progress: number;
  handleProgressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProgressBarElement: React.FC<ProgressBarElementProps> = ({
  progress,
  handleProgressChange,
}) => {
  return (
    <div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-3/4 z-50">
        {/* Barra de progreso con estela */}
        {/* <div
          className="h-[6px] bottom-[2.5px] left-0 -translate-y-1/2 absolute rounded-full z-10"
          style={{
            width: progress + "%",
            pointerEvents: "none",
            background: "#f2f2f2",
          }}
        ></div> */}

        {/* Input de rango */}
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          step="0.1" // Ajuste fino para mayor fluidez
          onChange={handleProgressChange}
          className="w-full transition-all duration-500 z-50"
          style={{
            appearance: "none",
            height: "2px",
            background: `linear-gradient(to right, #333, #f2f2f2 ${progress}%, #333 ${progress}%)`, // Gradiente ajustable
            borderRadius: "5px",
            outline: "none",
          }}
        />
        <style>{`
          input[type="range"]::-webkit-slider-thumb {
            appearance: none;
            width: 10px; /* Tamaño del círculo */
            height: 10px;
            background: #f2f2f2;
            border-radius: 50%; /* Forma circular */
            cursor: pointer;
          }
          input[type="range"]::-moz-range-thumb {
            width: 10px; /* Tamaño del círculo */
            height: 10px;
            background: #f2f2f2;
            border-radius: 50%; /* Forma circular */
            cursor: pointer;
          }
        `}</style>
      </div>
    </div>
  );
};
