import React from "react";
import { useContentList } from "../../hooks/localHooks/ContentListContext";

interface SwitchProps {
  isOpen: boolean;
}

export const Switch: React.FC<SwitchProps> = ({ isOpen }) => {
  const [active, setActive] = React.useState(false);
  const { filter, setFilter } = useContentList();

  const handleSwitch = () => {
    setActive(!active);
    setFilter(!filter);
  };

  return (
    <div
      className={`${isOpen ? "opacity-100" : "opacity-0"} w-12 h-6 rounded-full flex items-center cursor-pointer  ${active ? "bg-[#007AFF]" : "bg-white/10"} ${isOpen ? "duration-1000" : "duration-200"} transition-all duration-300 ease-in-out justify-start ${active ? "pl-6" : "pl-1"}`}
      onClick={handleSwitch}
    >
      <div
        className={`w-5 h-5 rounded-full ${active ? "bg-white" : " bg-[#007AFF]"} transition-all duration-300 ease-in-out`}
      ></div>
    </div>
  );
};
