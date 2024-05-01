import React, { ReactNode } from "react";
import Underline from "./Underline";
interface props {
  children: ReactNode;
}

const SpecialTiltle: React.FC<props> = ({ children }) => {
  return (
    <div className="w-[100%] flex flex-col items-center mb-[60px]">
      <h2 className="special-title text-center font-bold text-black text-[54px] ">
        {children}
      </h2>
      <Underline />
    </div>
  );
};
export default SpecialTiltle;
