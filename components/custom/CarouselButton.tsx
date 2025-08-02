'use client';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import React from 'react';
import Image from 'next/image';

export default function CarouselButton({
    imageUrl,
    onClick,
    children,
}: {
    imageUrl: string;
    onClick?: () => void;
    children: React.ReactNode;
}) {
    return (
       <div className="relative w-[100%] shadow-xl group/card">
        <div className=" rounded-[32px] w-full max-h-[450px] overflow-hidden bottom-right px-5 pt-8 duration-500
                      border-2 bg-gray-200/10 group-hover/card:bg-Primary-500 border-gray-400" onClick={onClick}>
              {/* Title */}
              <h2 className="text-white text-3xl font-semibold mb-4 font-family-Lufga">{children}</h2>
              <hr className='w-[150%] translate-x-[-50px] pb-5'/>

              {/* Image Stack */}
              <div className="relative flex justify-center mx-auto  w-full rounded-[24px]">
                {/* Shadow layers */}
                <div className="absolute top-2 left-2 w-full h-full bg-gray-400 rounded-[24px] opacity-30 scale-95 z-0" />
                <div className="absolute top-4 left-4 w-full h-full bg-gray-300 rounded-[24px] opacity-20 scale-[0.9] z-0" />

                {/* Actual Image */}
                <Image
                  src={imageUrl}
                  alt="UI Design"
                  width={1200}  // estimate; adjust to match your layout
                  height={800}  // estimate; adjust to match your layout
                  className="relative z-10 min-w-[115%] h-auto object-cover duration-500 group-hover/card:min-w-[125%]"
                  unoptimized   // only if imageUrl is an external path (e.g., from a CMS or CDN)
                />
              </div>              
        </div>
        {/* Arrow Button */}
              <div className="absolute bottom-1 right-1 bg-gray-800 group-hover/card:bg-Primary-500 w-25 h-25 rounded-full flex items-center justify-center z-20 border border-white/20 text-white  duration-500">
                <ArrowUpRightIcon size={55} weight='bold'/>
                
              </div>
       </div>
    );
}
