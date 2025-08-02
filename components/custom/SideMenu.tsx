'use client';
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import {  GlobeIcon, ListIcon, PackageIcon, ReadCvLogoIcon } from '@phosphor-icons/react';
import { Separator } from '../ui/separator';
import { HomeIcon } from 'lucide-react';
import SideButton from './SideButton';
import Image from 'next/image';

export default function SideMenu({ className, currIndex, OnClick }: { className?: string, currIndex?:number | null, OnClick: (index:number, href:string)=> void }) {
    
    const [show, setShow] = useState(false);


    return <div className={className}>
            <Sheet open={show} onOpenChange={setShow}>
                <SheetTrigger className=' text-white dark:text-black '>
                    <ListIcon size ="40" className={`font-family-Lufga cursor-pointer
                                    bg-transparent `} />
                </SheetTrigger>
                <SheetContent side='left' className=' bg-black dark:bg-gray-800  text-white'>
                    <SheetHeader>
                    <SheetTitle className=' text-white dark:text-black '></SheetTitle>
                    <SheetDescription></SheetDescription>
                    
                    </SheetHeader>
                    <div className='flex justify-center flex-wrap'>
                        
                         <Image src="/Images/Base-White-H.svg"
                            alt="Logo"
                            width={300}
                            height={100}
                            className="not-dark:hidden w-[170px] h-[100px] justify-center transition-transform duration-500" />
                          
                         <Image src="/Images/Base-Black-H.svg"
                            alt="Logo"
                            width={300}
                            height={100}
                            className="dark:hidden w-[170px] h-[100px] justify-center transition-transform duration-500" />
                          
                          <Separator className="m-6 max-w-[80%] bg-Primary-500" />
                        
                        <SideButton onClick={() => {OnClick(1,'/'); setShow(!show)}} isActive={currIndex === 1}><HomeIcon className='mr-[10px]'/> Home</SideButton>
                        <SideButton onClick={() => {OnClick(2,'/resume'); setShow(!show)}} isActive={currIndex === 2}><ReadCvLogoIcon className='mr-[10px]'/>Resume</SideButton>
                        <SideButton onClick={() => {OnClick(3,'/project'); setShow(!show)}} isActive={currIndex === 3}><PackageIcon className='mr-[10px]'/>Project</SideButton>
                        <SideButton onClick={() => {OnClick(4,'/about'); setShow(!show)}} isActive={currIndex === 4}><GlobeIcon className='mr-[10px]'/>Contact</SideButton>

                    </div>
                </SheetContent>
            </Sheet>
        </div>;          
}
