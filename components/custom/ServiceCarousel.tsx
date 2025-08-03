'use client';

import React from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import CarouselButton from "./CarouselButton";
import { useNavigation } from "./navigation";

export function ServiceCarousel({
    className,
}: {
    className?: string,
}) {

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    const { handleClick} = useNavigation();
  
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
    <Carousel setApi={setApi} className={className} >
      <CarouselContent >
        <CarouselItem className="flex justify-center md:basis-1/2 lg:basis-1/3">
          <CarouselButton imageUrl="/Images/Services/ST1.png" onClick={() => handleClick(3,'/project')} >  Game Dev: Unity </CarouselButton>
        </CarouselItem>
        <CarouselItem className="flex justify-center md:basis-1/2 lg:basis-1/3">
          <CarouselButton imageUrl="/Images/Services/ST2.png"  onClick={() => handleClick(3,'/project')}> Game Dev: Unreal </CarouselButton>
        </CarouselItem>
        <CarouselItem className="flex justify-center md:basis-1/2 lg:basis-1/3">
          <CarouselButton imageUrl="/Images/Services/ST3.png" onClick={() => handleClick(3,'/project')} > Css/Web </CarouselButton>
        </CarouselItem>     
        <CarouselItem className="flex justify-center md:basis-1/2 lg:basis-1/3">
          <CarouselButton imageUrl="/Images/Services/ST4.png" onClick={() => handleClick(3,'/project')} > Game Design </CarouselButton>
        </CarouselItem>
        <CarouselItem className="flex justify-center md:basis-1/2 lg:basis-1/3">
          <CarouselButton imageUrl="/Images/Services/ST5.png" onClick={() => handleClick(3,'/project')} > Lectures: Game Dev </CarouselButton>
        </CarouselItem>    
        <CarouselItem className="flex justify-center md:basis-1/2 lg:basis-1/3">
          <CarouselButton imageUrl="/Images/Services/ST6.png" onClick={() => handleClick(3,'/project')} > Robotics </CarouselButton>
        </CarouselItem>
        <CarouselItem className="flex justify-center md:basis-1/2 lg:basis-1/3">
          <CarouselButton imageUrl="/Images/Services/ST7.png" onClick={() => handleClick(3,'/project')} > VR/AR Projects </CarouselButton>
        </CarouselItem>

      </CarouselContent>
      <CarouselPrevious className="
                font-family-Lufga
                cursor-pointer not-md:hidden
                w-[70px] h-[70px] p-3
                border-gray-400 border-2 rounded-[20px] text-[60px] text-white bg-gray-800 hover:border-Primary-400 active:bg-Primary-500
                flex items-center flex-2 justify-center transition duration-100" />
      <CarouselNext className="
                font-family-Lufga
                cursor-pointer not-md:hidden
                w-[70px] h-[70px] p-3
                border-gray-400 border-2 rounded-[20px] text-[60px] text-white bg-gray-800 hover:border-Primary-400 active:bg-Primary-500
                flex items-center flex-2 justify-center transition duration-100"/>

      <span className="flex justify-center gap-5 mt-2 pt-15">
        {Array.from({ length: count }).map((_, index) => (
          <span
            key={index}
            className={`h-7 rounded-full transition-all duration-300 ${
              current-1 === index ? "w-30 bg-Primary-500" : "w-7 bg-gray-50"
            }`}
          />
        ))}
      </span>
    </Carousel>
  )
}