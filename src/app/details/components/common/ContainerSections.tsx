import React, { ReactNode } from "react";
interface ContainerSectionsProps {
  children: ReactNode;
}
export const ContainerSections: React.FC<ContainerSectionsProps> = ({
  children,
}) => {
  return (
    <div className="text-white text-center flex flex-col justify-center items-center w-screen gap-5 pb-5 px-5 2xl:gap-10 2xl:pb-10 2xl:px-10">
      {children}
    </div>
  );
};
