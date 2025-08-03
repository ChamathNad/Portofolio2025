
import React from 'react';
import WorkXPRow from '../custom/WorkXpRow';
import { WorkHystory } from '@/lib/localData';

export default function WorkPage()
{       
  const experienceData = WorkHystory();

    return (
        <div className='mx-auto h-auto w-full py-[1%] duration-200 lg:max-w-[1500px] '>
          <div className={"w-full h-auto flex flex-col justify-center group rounded-[25px] "}>

            <div className='w-full h-auto justify-center flex'>
              <div className='py-[3%] not-xl:w-[100vh] flex justify-center px-[15%] z-5 font-family-Lufga dark:text-white duration-200'>
                <span className='text-[30px] md:text-[40px] lg:text-[50px] '>My <span className='text-Primary-500'>Journey </span> so far...</span>
              </div>
            </div>
            <div className='w-full flex flex-col '>
              {experienceData.map((exp, index) => (
                <WorkXPRow key={index} place={exp.place} position={exp.title} date={exp.time} desc={exp.description} 
                            odd={index % 2 == 0} classdataBase='text-[12px] sm:text-[15px] lg:text-[28px]' classdataDesc='text-[12px] lg:text-[20px]'nodeSize=' w-[80%] max-w-[46px]'/>
              ))}

              
            </div>
          </div>  
        </div>
    );
};