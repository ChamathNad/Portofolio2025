'use client';
import React from 'react';

export default function WorkXPRow({
    place,
    position,
    date,
    desc,
    odd,
    classdataBase,
    classdataDesc,
    nodeSize,
}: {
    place?: string;
    position?: string;
    date?:string;
    desc?:string;
    odd?:boolean;
    classdataBase:string;
    classdataDesc:string;
    nodeSize:string;
}) {
    return (
        <div className={`${classdataBase} flex mx-auto gap-[10%] grid-cols-3 dark:text-white font-family-Lufga w-[80%] py-2 md:p-5 duration-200`}>
                <div className='flex flex-col flex-[3]'>
                    <div className='font-bold'>{place}</div>
                    <div className={`text-gray-500 ${classdataDesc}`}>{date}</div>
                </div>
                <div className="flex flex-[1] mx-auto justify-center items-center">
                    <div className={`relative ${nodeSize} rounded-full border-2 border-gray-400 border-dashed flex items-center justify-center`}>
                        <div className={`w-[85%] h-[85%] z-1 rounded-full ${odd?' bg-Primary-500': 'bg-gray-600' }`} />
                        
                        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[100%]
                                    w-px h-[100%] border-l-2 border-dashed border-gray-400 pointer-events-none"
                        />
                    </div>
                </div>
                <div className='flex flex-col flex-[3]'>
                    <div className='font-bold'>{position}</div>
                    <div className={`text-gray-500 ${classdataDesc}`}>{desc}</div>
                </div>
        </div>
    );
}
