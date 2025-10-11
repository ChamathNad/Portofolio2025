'use client';
import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';

export default function DownloadButton({
  children,
  onClick,
  isGame,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  isGame?: boolean;
}) {
  const [downButton, setdownButton] = useState<boolean>();

  return (
    <div
      className={`font-family-Lufga cursor-grab group justify-center mx-auto rounded-[60px] max-w-[450px] text-[12px] sm:text-[16px] md:text-[20px] font-normal text-white flex items-center flex-2  transition duration-200`}
    >
      <button
        onClick={onClick}
        onMouseEnter={() => setdownButton(false)}
        className={`p-1 w-[60%]  h-[100%] border-l-2 border-b-2 border-t-2 border-white/50 duration-200  rounded-l-[60px] 
                bg-Primary-500 dark:bg-Primary-500/80  
                ${downButton ? "" : "group-hover:bg-Primary-500/80 dark:group-hover:bg-Primary-500"}`}
      >
        {children}
      </button>

      <button
       onClick={() => {
            const link = document.createElement('a');
            link.href = isGame? '/CV1.pdf' : '/CV2.pdf'; // path in public/
            link.download = 'MyCV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }}
        onMouseEnter={() => setdownButton(true)}
        className="p-1 w-[25%] h-[100%] border-2 border-white/50 group/download bg-Primary-500 group-hover:bg-Primary-500/80 dark:bg-Primary-500/80 dark:group-hover:bg-Primary-500 justify-items-center duration-200 rounded-r-[60px]"
      >
        <FaDownload className="mx-auto duration-200" />
      </button>
    </div>
  );
}
