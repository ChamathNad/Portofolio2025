'use client';
import { XIcon } from '@phosphor-icons/react';
import React from 'react';

export default function FilterButton({
  children,
  onClick,
  isActive,
  color = '#777777',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  color?: string; // '#10b981'
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex justify-center items-center w-auto border-1 rounded-2xl px-[3%] max-h-8 m-1
        active:font-bold active:text-white
        hover:scale-[110%]
        transition-all duration-150
      `}
      style={{
        borderColor: color,
        color: isActive ? 'white' : color,
        backgroundColor: isActive ? `${color}80` : `${color}20`,
      }}
    >
      {children}
      <XIcon className={`m-1 ${isActive ? 'block' : 'hidden'}`} weight="bold" />
    </button>
  );
}
