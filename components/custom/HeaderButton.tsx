import React from 'react';

export default function HeaderButton({
    children,
    onClick,
    isActive,
}: {
    children: React.ReactNode;
    onClick?: () => void;
    isActive?: boolean;
}) {
    return (
        <button
            onClick={onClick}
            className={`
                font-family-Lufga
                cursor-pointer 
                border-Primary-400 
                w-[170px] xl:w-[200px] h-[66px] rounded-[60px] text-[20px] 
                flex items-center flex-2 justify-center transition duration-200
                ${isActive ? 'bg-Primary-500  font-bold  text-white' : 'bg-black hover:bg-gray-400 font-normal  dark:bg-gray-200  dark:hover:bg-gray-500 text-white dark:text-black  hover:border-1'}
            `}
        >
            {children}
        </button>
    );
}
