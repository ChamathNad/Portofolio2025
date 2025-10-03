
import React from 'react';

export default function InterestIcon({
        className, imageLink, logoName
    }:{
        className?: string,
        imageLink: string,
        logoName: string,
    })
{       
    return (
        <div className={`${className} flex flex-col mx-auto justify-center items-center gap-2 m-[2%]`}>
           <svg
                viewBox="0 0 24 24" 
                className={`w-[60%] h-auto max-h-[70%] flex items-center duration-500 border-3 border-black/50 
                            rounded-[20%] p-[5%] lg:p-5 dark:border-white/50`}
            >
                <path 
                    d={imageLink}
                    fillRule='evenodd'
                    fill="currentColor" /> 
            </svg>
            <span className='flex text-center text-[15px] lg:text-[20px] items-center justify-center'> {logoName} </span>
        </div>
    );
};