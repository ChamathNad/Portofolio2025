'use client';
import React, { ReactElement, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, Sheet } from '../ui/sheet';
import Image from 'next/image';
import { Event } from '@/lib/localData';
import { FacebookLogoIcon, InstagramLogoIcon } from '@phosphor-icons/react';
import { FaGithub, FaYoutube, FaGooglePlay, FaGlobe } from 'react-icons/fa';
import { IoLogoGameControllerB } from 'react-icons/io';


Autoplay.globalOptions = {  playOnInit : false }

export default function EventCard({
        className, data,
    }:{
        className?: string,
        data: Event,
    })
{        
    const [show, setShow] = useState(false);
    const baseUrl = process.env.NEXT_PUBLIC_CLOUDINARY_URL;     

    const getIconByName = (name: string): ReactElement => {
        switch (name) {
            case "github":
                return <FaGithub />;
            case "youtube":
                return <FaYoutube />;
            case "playstore":
                return <FaGooglePlay />;
            case "play":
                return <IoLogoGameControllerB />;
            case "facebook":
                return <FacebookLogoIcon />;
            case "website":
                return <FaGlobe />;
            case "insta":
                return <InstagramLogoIcon />;
            default:
                return <></>; // or a fallback icon
        }
    }

    return (       

        <Sheet open={show} onOpenChange={setShow}>
                <SheetTrigger className='flex mx-auto  not-md:w-full '>
                    {/* Card */}
                    <div className={`${className}  shadow-gray-600 bg-foreground/80 text-white dark:bg-white/20 border-Primary-500/50 
                        relative flex flex-col mx-auto gap-1 m-1 border-2 rounded-3xl justify-between
                        h-auto w-[80%] md:max-w-[30vh] aspect-[5/4] overflow-clip
                        hover:scale-[110%] duration-500 shadow-lg`}>
                    
                    <div className={`relative w-full h-[70%] flex items-center duration-500 border-b-3 border-Primary-500/50  overflow-clip`} >           
                        <Image
                            src={`${baseUrl}${data.cover}`}
                            alt=""
                            width={500}
                            height={500}
                            priority
                            className="max-h-full max-w-full object-cover mx-auto aspect-auto  rounded-[8px]"
                        />
                    </div>

                    <span className='flex text-center text-[15px] lg:text-[20px] items-center justify-center'> {data.title} </span>
                    <span className='flex text-center text-[11px] lg:text-[12px] items-center justify-center mx-auto'>
                        {data.data} 
                    </span>
                    <span className='flex text-center text-[11px] lg:text-[12px] items-center justify-center mb-[5%]'>
                        {data.tags.map((exp, index) => (
                        <span className='border-1 px-2 mx-1 rounded-[10px] bg-Primary-500/10 border-Primary-400/50' key={index}> {exp} </span>
                        ))}  
                    </span>
                    </div>
                </SheetTrigger>
                
                <SheetContent side='bottom'    
                    className='text-[12px] sm:text-[14px] lg:text-[15px]  overflow-y-auto max-h-screen
                            justify-center-safe bg-foreground dark:bg-background text-white rounded-2xl font-family-Lufga 
                            fixed left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 w-[90%] max-w-[1250px]'>
                    
                    <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>                    
                    </SheetHeader>

                    {/* Card Open*/}
                    <div className="flex w-full mx-auto justify-center items-center text-center flex-col gap-3 mb-10">
                    <span className="text-[200%] px-[15%]">{data.title}</span>
                    <span className="text-gray-400 px-[15%]">{data.data}</span>
                    <hr className="w-[80%] bg-Primary-500/50 border-Primary-500/50"/>

                    <div className="w-[70%] max-w-[700px] max-h-[50%] flex items-center justify-center">
                        <Image
                            src={`${baseUrl}${data.cover}`}
                            alt=""
                            width={500}
                            height={500}
                            className="max-h-full max-w-full object-contain aspect-[7/4] rounded-[8px]"
                        />           
                    </div>                    
                    <span className="text-start w-[80%]">{data.description}</span>
                    
                    <hr className="w-[80%] bg-Primary-500/50 border-Primary-500/50"/>
                    <div className="md:px-[10%] font-semibold text-start w-[80%]">
                        <span className="text-Primary-500 text-2xl">Topics - </span>
                        <br/>  
                        <ul className="list-disc ml-5 font-normal md:px-[15%] marker:text-Primary-500">
                            {data.cdescription.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>    
                    </div>
                    <hr className="w-[80%] bg-Primary-500/50 border-Primary-500/50"/>
                    <div className='flex mx-auto justify-between items-center w-[80%]'>
                        {data.linkList.length == 0 ? 
                            <button                   
                                className={`
                                    font-family-Lufga mx-auto 
                                    border-gray-200 border-2
                                    w-[70%] lg:max-w-[50%] h-[50px] rounded-[10px] 
                                    flex items-center justify-center 
                                    font-normal  text-gray-200
                                `}
                            >No Links Found</button>
                            :data.linkList.map((exp,index) => 
                            <button      
                                key= {index}            
                                className={`
                                    font-family-Lufga
                                    cursor-pointer 
                                    border-Primary-400 border-2 mx-auto
                                    w-full md:max-w-[30%] h-[50px] rounded-[10px] md:text-[15px] 
                                    flex items-center justify-center transition duration-200 
                                    font-normal hover:bg-Primary-500/10 text-Primary-500 hover:scale-x-[105%] hover:px-5
                                `}
                            >
                                <a href={exp.link} target="_blank" rel="noopener noreferrer" className='flex w-full justify-center flex-row items-center gap-2'>
                                {getIconByName(exp.type) ?? null}
                                {exp.name}
                                </a>
                            </button>)
                        }
                    </div>
                    </div>
                </SheetContent>
            </Sheet>
    );
};