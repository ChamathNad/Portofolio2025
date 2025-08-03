'use client';
import React, { ReactElement, useRef, useState } from 'react';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, Sheet } from '../ui/sheet';
import { Tabs, TabsContent, TabsList } from '../ui/tabs';
import { TabsTrigger } from '@radix-ui/react-tabs';
import { FaGithub, FaGlobe, FaGooglePlay, FaYoutube } from 'react-icons/fa';
import { IoLogoGameControllerB } from 'react-icons/io';
import { FacebookLogoIcon, InstagramLogoIcon } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';


Autoplay.globalOptions = {  playOnInit : false }


export default function ProjectCard({
        className, logoName, imageLink,date, place, tags, images, quote, description, cquote, contributiondesc, linkList, videos,size
    }:{
        className?: string,
        logoName: string,
        imageLink: string,
        date:string,
        place :string,
        size : string,
        tags:string[],
        cquote: string,
        images:string[],
        quote:string,
        description:string,
        contributiondesc:string[],
        linkList:{name:string,type:string,link:string}[],
        videos:string[],
    })
{       
    const autoplay = useRef( Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: false }));    
    const [show, setShow] = useState(false);
    const baseUrl = process.env.NEXT_PUBLIC_CLOUDINARY_URL;    
    const baseUrlV = process.env.NEXT_PUBLIC_CLOUDINARY_V_URL;    
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

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

    React.useEffect(() => {
          if (!api) return;
    
          const updateState = () => {
            setCount(api.scrollSnapList().length);
            setCurrent(api.selectedScrollSnap() + 1);
          };
    
          updateState(); // Run initially
    
          api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
          });
    
          // Add resize listener
          window.addEventListener("resize", updateState);
    
          return () => {
            // Cleanup resize listener
            window.removeEventListener("resize", updateState);
          };
        }, [api]);
    
    return (       

        <Sheet open={show} onOpenChange={setShow}>
                <SheetTrigger className='flex mx-auto not-md:w-full '>
                    {/* Card */}
                    <div className={`${className}  shadow-gray-600 bg-foreground/80 text-white dark:bg-white/20 border-Primary-500/50 
                        relative flex flex-col mx-auto gap-1 m-1 border-2 rounded-3xl justify-between
                        h-auto w-[80%] sm:max-w-[30vh] aspect-[5/4] overflow-clip
                        hover:scale-[110%] duration-500 shadow-lg`}
                        onMouseEnter={() => { if (autoplay?.current && images.length > 0) { autoplay.current.play(); }}}
                        onMouseLeave={() => {autoplay.current?.stop(); autoplay.current?.reset();}}
                    >
                    
                    <div className={`relative w-full h-[70%] flex items-center duration-500 border-b-3 border-Primary-500/50  overflow-clip`} >           
                        <Carousel plugins={[autoplay.current]} className='relative flex w-full h-full justify-center items-center'>
                            <CarouselContent className='flex'>
                                <CarouselItem  className='relative flex w-full h-full'>
                                    <Image
                                        src={`${baseUrl}${imageLink}`}
                                        alt=""
                                        width={500}
                                        height={500}
                                        className="max-h-full max-w-full object-cover mx-auto aspect-auto  rounded-[8px]"
                                    />
                                </CarouselItem>
                                {images.map((exp, index) => 
                                    <CarouselItem key={index} className='relative flex w-full h-full'>
                                        <Image
                                        src={`${baseUrl}${exp}`}
                                        alt=""
                                        width={500}
                                        height={500}
                                        className="max-h-full max-w-full object-cover aspect-auto mx-auto rounded-[8px]"
                                        />
                                    </CarouselItem>
                                )}
                            </CarouselContent>
                        </Carousel>
                    </div>

                    <span className='flex text-center text-[15px] lg:text-[18px] items-center justify-center'> {logoName} </span>
                    <span className='flex text-center text-[11px] lg:text-[12px] items-center justify-center mx-auto'>
                        {date} 
                    </span>
                    <span className='flex text-center text-[11px] lg:text-[12px] items-center justify-center mb-[5%]'>
                        {tags.map((exp, index) => (
                        <span className='border-1 px-[4%] mx-[2%] rounded-[10px] bg-Primary-500/10 border-Primary-400/50' key={index}> {exp} </span>
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
                    <span className="text-[200%] px-[15%]">{logoName}</span>
                    <span className="text-Primary-400 px-[15%]">{place}</span>
                    <span className="text-gray-400 px-[15%]">{date}</span>
                    <span className="text-Primary-200 px-[15%]">Team Size : {size}</span>
                    <hr className="w-[80%] bg-Primary-500/50 border-Primary-500/50"/>

                    <div className="w-[70%] max-w-[700px] max-h-[50%]">
                        

                        <Tabs defaultValue="Images" className="relative w-full flex-col rounded-[8px] overflow-clip">
                        <TabsList className={`flex mx-auto bg-transparent border-x-1 border-Primary-500 ${videos.length == 0? 'hidden':'' }`}>
                            <TabsTrigger className='px-4 mx-1 border-1 rounded-[5px] data-[state=active]:bg-muted data-[state=active]:text-foreground' value="Images"> 
                                Images 
                            </TabsTrigger>
                            <TabsTrigger className='px-4 mx-1 border-1 rounded-[5px] data-[state=active]:bg-muted data-[state=active]:text-foreground' value="Videos"> 
                                Videos 
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="Images">
                            <Carousel setApi={setApi} className="relative aspect-auto flex-col rounded-[8px] ">
                                <CarouselContent className='relative flex '>
                                    <CarouselItem className="flex justify-center items-center w-full h-full">
                                    <Image
                                        src={`${baseUrl}${imageLink}`}
                                        alt=""
                                        width={500}
                                        height={500}
                                        className="max-h-full max-w-full object-contain aspect-[7/4] rounded-[8px]"
                                    />
                                    </CarouselItem>
                                    {images.map((exp, index) => (
                                    <CarouselItem key={index} className="flex justify-center items-center w-full h-full">
                                        <Image
                                        src={`${baseUrl}${exp}`}
                                        alt=""
                                        width={500}
                                        height={500}
                                        className="max-h-full max-w-full object-contain aspect-[7/4]"
                                        />
                                    </CarouselItem>
                                    ))}                                    
                                </CarouselContent>
                            </Carousel>                            
                            <span className="flex justify-center gap-3 p-3">
                                {Array.from({ length: count }).map((_, index) => (
                                <span
                                    key={index}
                                    className={`h-2 md:h-4 rounded-full transition-all duration-300 ${
                                    current-1 === index ? "w-5 md:w-10 bg-Primary-500" : "w-2 md:w-4 bg-gray-500"
                                    }`}
                                />
                                ))}
                            </span>
                        </TabsContent>
                        <TabsContent value="Videos">
                            <Carousel setApi={setApi} className="relative aspect-auto flex-col rounded-[8px] ">
                                <CarouselContent className='relative flex '>                                    
                                    {videos.map((exp, index) => (
                                    <CarouselItem key={index} className="flex justify-center items-center w-full h-full">
                                        <video
                                        src={`${baseUrlV}${exp}`}
                                        controls
                                        className="max-h-full max-w-full object-contain aspect-[7/4] rounded-[8px]"
                                        preload="metadata"
                                        />
                                    </CarouselItem>
                                    ))}                                    
                                </CarouselContent>
                            </Carousel>                            
                            <span className="flex justify-center gap-3 p-3">
                                {Array.from({ length: count }).map((_, index) => (
                                <span
                                    key={index}
                                    className={`h-2 md:h-4 rounded-full transition-all duration-300 ${
                                    current-1 === index ? "w-5 md:w-10 bg-Primary-500" : "w-2 md:w-4 bg-gray-500"
                                    }`}
                                />
                                ))}
                            </span>
                        </TabsContent>
                        </Tabs>
                    </div>
                    
                    <span className="px-[10%]"><i>{quote}</i></span>
                    <span className="text-start w-[80%]">{description}</span>
                    
                    <hr className="w-[80%] bg-Primary-500/50 border-Primary-500/50"/>
                    <div className="px-[10%] text-start">
                        <span className="text-Primary-500 text-[120%] font-semibold">Contribution - </span> {cquote}
                        <br/>  
                        <ul className="list-disc ml-5 font-normal md:px-[25%] marker:text-Primary-500">
                            {contributiondesc.map((item, index) => (
                                <li key={index} >{item}</li>
                            ))}
                        </ul>    
                    </div>
                    <hr className="w-[80%] bg-Primary-500/50 border-Primary-500/50"/>
                    <div className='flex mx-auto justify-between items-center w-[80%]'>
                        {linkList.length == 0 ? 
                            <button                   
                                className={`
                                    font-family-Lufga mx-auto 
                                    border-gray-200 border-2
                                    w-[70%] lg:max-w-[50%] h-[50px] rounded-[10px] 
                                    flex items-center justify-center 
                                    font-normal  text-gray-200
                                `}
                            >No Links Found</button>
                            :linkList.map((exp,index) => 
                            <button      
                                key= {index}            
                                className={`
                                    font-family-Lufga
                                    cursor-pointer 
                                    border-Primary-400 border-2 mx-auto
                                    w-full md:max-w-[30%] h-[35px] md:h-[50px] rounded-[10px] md:text-[15px] 
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