'use client';
import React from 'react';

export default function SideButton({
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
                h-[40px] rounded-[40px] text-[20px] w-full
                ml-[10%] mr-[10%] m-[5px]
                border-Primary-400 dark:border-gray-400
                flex items-center justify-center transition duration-200
                ${isActive ? 'bg-Primary-500  font-bold  text-white border-0' : 'bg-black hover:bg-gray-800 font-normal  dark:bg-gray-100  dark:hover:bg-gray-300 text-white dark:text-black hover:border-1'}
            `}
        >
            {children}
        </button>
    );
}
