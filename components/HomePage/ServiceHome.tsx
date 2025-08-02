
import React from 'react';
import { ServiceCarousel } from '../custom/ServiceCarousel';

export default function ServicesPage()
{       

    return (
        <div className='mx-auto h-[80vh] w-full pt-2 duration-200 lg:max-w-[1500px] lg:h-[1000px] '>
        <div className={"w-full h-[80vh] flex flex-col justify-center group bg-gray-800 rounded-[25px] "}>

          <div className='w-full h-[20vh] flex'>
            <div className="absolute w-full h-[70vh] translate-y-[15%] mix-blend-lighten rounded-fade opacity-50">
              <div className="absolute inset-0 z-0 bg-[url('/Images/BG_Circut.jpg')] bg-center bg-repeat bg-[length:1500px] blur-50"/>
              <div className="absolute inset-0 z-1 bg-[url('/Images/BG_Circut.jpg')] bg-center bg-repeat bg-[length:1500px] mix-blend-multiply animate-scroll-circuit blur-50"/>
              <div className="absolute inset-0 z-2 bg-[url('/Images/BG_Circut.jpg')] bg-center bg-repeat bg-[length:1500px] mix-blend-plus-lighter blur-50"/>              
            </div>

            <div className='mx-auto py-[3%] not-xl:w-[100vh] flex justify-between px-[5%] lg:px-[15%] z-5 font-family-Lufga text-white duration-200'>
              <span className='flex-3 text-[50px] not-lg:text-[40px]'>What I <span className='text-Primary-500'>Build</span>...</span>
              <span className='flex-4 text-[20px] py-[12px] not-lg:text-[15px]'>“Building immersive worlds in Unity and Unreal, crafting intuitive UIs in React, or prototyping with robotics and AR, offer versatile, full-stack solutions tailored for tomorrow.”</span>
            </div>
          </div>
          <div className='w-full h-[50vh] flex justify-center '>
            <ServiceCarousel className='absolute mx-auto w-[70%] xl:w-[80%] h-[50vh] text-9xl z-[20]flex group duration-200' />
          </div>
        </div>  
        </div>
    );
};