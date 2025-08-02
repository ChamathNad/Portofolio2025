
import React from 'react';
import WorkXPRow from '../custom/WorkXpRow';
import { WorkHystory } from '@/lib/localData';

export default function WorkPage()
{       
  const experienceData = WorkHystory();

    return (
        <div className='mx-auto h-auto  w-full py-20 duration-200 lg:max-w-[1500px] '>
          <div className={"w-full h-auto flex flex-col justify-center group rounded-[25px] "}>

            <div className='w-full h-auto justify-center flex'>
              <div className='py-[3%] not-xl:w-[100vh] flex justify-center px-[15%] z-5 font-family-Lufga dark:text-white duration-200'>
                <span className='text-[50px] not-lg:text-[40px]'>My <span className='text-Primary-500'>Journey </span> so far...</span>
              </div>
            </div>
            <div className='w-full flex flex-col '>
              {experienceData.map((exp, index) => (
                <WorkXPRow key={index} place={exp.place} position={exp.title} date={exp.time} desc={exp.description} 
                            odd={index % 2 == 0} classdataBase='lg:text-[30px] text-[15px]' classdataDesc='text-[12px] lg:text-[20px]' nodeSize=' w-[36px] h-[36px] md:w-[66px] md:h-[66px]'/>
              ))}

              
            </div>
          </div>  
        </div>
    );
};