'use client';

import Link from 'next/link';
import React from 'react';

export default function SocialButton({
    link, logo } : { link:string, logo: React.ReactElement;
}){
    return (
        <div className='flex flex-row gap-[10px] items-center '>
            <Link href={link}  target="_blank" rel="noopener noreferrer">
            {logo}
            </Link >
            <div>|</div>
        </div>
    );
};