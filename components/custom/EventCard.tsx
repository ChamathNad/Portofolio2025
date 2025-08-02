'use client';
import { CldImage } from 'next-cloudinary';
import React, { useRef, useState } from 'react';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, Sheet } from '../ui/sheet';
import Image from 'next/image';


Autoplay.globalOptions = {  playOnInit : false }

export default function EventCard({
        className, logoName, imageLink,date, tags, images, description,contributiondesc, linkList,
    }:{
        className?: string,
        logoName: string,
        imageLink: string,
        date:string,
        tags:string[],
        images:string[],
        description:string,
        contributiondesc:string[],
        linkList:{name:string,link:string}[],
    })
{       
    const autoplay = useRef( Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: false }));    
    const [show, setShow] = useState(false);
    const baseUrl = process.env.NEXT_PUBLIC_CLOUDINARY_URL;       
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

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
                <SheetTrigger className='flex mx-auto '>
                    {/* Card */}
                    <div className={`${className} relative flex flex-col mx-auto bg-foreground/80 text-white dark:bg-white/20 gap-1 m-1 border-2 rounded-3xl h-[25vh] w-[25vh] overflow-clip border-Primary-500/50 hover:scale-[110%] duration-500`}
                        onMouseEnter={() => autoplay.current?.play()}
                        onMouseLeave={() => {autoplay.current?.stop(); autoplay.current?.reset();}}
                    >
                    
                    <div className={`relative w-full h-[70%] flex items-center duration-500 border-b-3 border-Primary-500/50  overflow-clip`} >           
                        <Carousel plugins={[autoplay.current]} className='relative flex w-full h-full justify-center items-center'>
                            <CarouselContent className='flex w-[350px] h-[250px] '>
                                <CarouselItem  className='relative flex w-full h-full'>
                                    <CldImage src={imageLink} alt= "" fill={true} className="object-cover"/>
                                </CarouselItem>
                                {images.map((exp, index) => 
                                    <CarouselItem key={index} className='relative flex w-full h-full'>
                                        <CldImage src={exp} alt= "" fill={true} className="object-cover"/>
                                    </CarouselItem>
                                )}
                            </CarouselContent>
                        </Carousel>
                    </div>

                    <span className='flex text-center text-[15px] lg:text-[20px] items-center justify-center'> {logoName} </span>
                    <span className='flex text-center text-[11px] lg:text-[12px] items-center justify-center px-5'>
                        {date} 
                    </span>
                    <span className='flex text-center text-[11px] lg:text-[12px] items-center justify-center px-5'>
                        {tags.map((exp, index) => (
                        <span className='border-1 px-2 mx-1 rounded-[10px] bg-Primary-500/10 border-Primary-400/50' key={index}> {exp} </span>
                        ))}  
                    </span>
                    </div>
                </SheetTrigger>
                
                <SheetContent side='bottom' className='md:text-[16px] justify-center-safe bg-foreground dark:bg-background text-white rounded-2xl font-family-Lufga fixed left-1/2 -translate-x-1/2 bottom-1/2 translate-y-1/2 max-h-screen w-[90%] h-[95%] max-w-[1250px]'>
                    <SheetHeader>
                    <SheetTitle></SheetTitle>
                    <SheetDescription></SheetDescription>                    
                    </SheetHeader>

                    {/* Card Open*/}
                    <div className="flex w-full mx-auto justify-center items-center text-center flex-col gap-4">
                    <span className="text-4xl px-[15%]">{logoName}</span>
                    <span className="text-gray-400 px-[15%]">{date}</span>
                    <hr className="w-[80%] bg-Primary-500/50 border-Primary-500/50"/>

                    <div className="w-[70%] max-w-[700px] max-h-[50%]">
                        <Carousel setApi={setApi} className="relative aspect-auto flex-col rounded-[8px] ">
                            <CarouselContent className='relative flex '>
                                <CarouselItem className="flex justify-center items-center w-full h-full">
                                <Image
                                    src={`${baseUrl}${imageLink}`}
                                    alt=""
                                    width={300}
                                    height={100}
                                    className="max-h-full max-w-full object-contain aspect-[7/4]  rounded-[8px]"
                                />
                                </CarouselItem>
                                {images.map((exp, index) => (
                                <CarouselItem key={index} className="flex justify-center items-center w-full h-full">
                                    <Image
                                    src={`${baseUrl}${exp}`}
                                    alt=""
                                    width={300}
                                    height={100}
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
                                className={`h-4 rounded-full transition-all duration-300 ${
                                current-1 === index ? "w-10 bg-Primary-500" : "w-4 bg-gray-500"
                                }`}
                            />
                            ))}
                        </span>
                    </div>                    
                    <span className="text-start w-[80%]">{description}</span>
                    
                    <hr className="w-[80%] bg-Primary-500/50 border-Primary-500/50"/>
                    <div className="md:px-[10%] font-semibold text-start w-[80%]">
                        <span className="text-Primary-500 text-2xl">Topics - </span>
                        <br/>  
                        <ul className="list-disc ml-5 font-normal md:px-[15%] marker:text-Primary-500">
                            {contributiondesc.map((item, index) => (
                                <li key={index}>{item}</li>
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
                                    w-[50%] h-[50px] rounded-[10px] text-[20px] 
                                    flex items-center justify-center 
                                    font-normal  text-gray-200 ho
                                `}
                            >No Links Found</button>
                            :linkList.map((exp,index) => 
                            <button      
                                key= {index}              
                                className={`
                                    font-family-Lufga
                                    cursor-pointer 
                                    border-Primary-400 border-2 mx-auto
                                    w-full max-w-[30%] h-[50px] rounded-[10px] text-[20px] 
                                    flex items-center justify-center transition duration-200 
                                    font-normal hover:bg-Primary-500/10 text-Primary-500 hover:scale-x-[105%] hover:px-5
                                `}
                            >
                                {exp.name}
                            </button>)
                        }
                    </div>
                    </div>
                </SheetContent>
            </Sheet>
    );
};