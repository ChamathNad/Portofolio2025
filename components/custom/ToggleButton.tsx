'use client';
import React, { useState } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react"; // Adjust this import based on your icon source

export default function ToggleButtons
(
  {children1, children2, Link1, Link2}:
  {children1:React.ReactNode, children2:React.ReactNode, Link1?: () => void, Link2?: () => void }
) {
  const [hovered, setHovered] = useState(false);
  const button1Width = hovered ? "w-[30%]" : "w-[70%]";
  const button2Width = hovered ? "w-[70%]" : "w-[30%]";

  return (
    <div className="relative mx-auto translate-y-[600px] flex justify-center gap-[10px] w-[367px] h-[75px] rounded-[50px] border-2 border-gray-100 p-[5px] z-50">
      
      
      <button
        className={`flex gap-2 items-center justify-center font-bold text-[18px] pl-[20px] pr-[20px] rounded-[60px] transition-all duration-300 text-white
           ${button1Width}
          ${hovered ? "bg-transparent border-0" : "bg-Primary-500  border-2"}
        `}
        onClick={Link1}
      >
        {children1}
        {!hovered && <ArrowUpRightIcon size={22} weight="bold"/>}
      </button>


      <button
        className={`flex gap-2 items-center justify-center text-[18px] font-bold pl-[20px] pr-[20px] rounded-[60px] transition-all duration-300 text-white
           ${button2Width}
          ${hovered ? "bg-Primary-500  border-2 " : "bg-transparent border-0"}
        `}
        onClick={Link2}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children2}
        {hovered && <ArrowUpRightIcon size={22} weight="bold"/>}
      </button>
    </div>
  );
}
