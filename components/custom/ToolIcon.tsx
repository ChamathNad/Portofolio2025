
import Image from 'next/image';
import React from 'react';

export default function ToolIcon({
        className, imageLink, logoName, invert
    }:{
        className?: string,
        imageLink: string,
        logoName: string,
        invert?:boolean,
    })
{       
    return (
        <div className={`${className} flex flex-col mx-auto justify-center items-center gap-2 m-[2%]`}>
            <Image
                src={imageLink}
                alt= {logoName}
                width={100}
                height={100}
                className={`w-[60%] h-auto max-h-[70%] flex items-center duration-500 border-3 border-black/50 
                            rounded-[20%] p-[5%] lg:p-5 ${invert? 'dark:invert' : 'dark:border-white/50'}`}
            />
            <span className='flex text-center text-[15px] lg:text-[20px] items-center justify-center'> {logoName} </span>
        </div>
    );
};