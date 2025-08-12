'use client';
import Container from "@/components/custom/Container";
import { useNavigation } from "@/components/custom/navigation";
import ToolIcon from "@/components/custom/ToolIcon";
import WorkXPRow from "@/components/custom/WorkXpRow";
import HomeFooter from "@/components/HomePage/Footer";
import { SchoolHystory, ToolHystory, WorkHystory } from "@/lib/localData";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Image from 'next/image';


export default function Home() {
  
    const experienceData = WorkHystory();
    const schoolData = SchoolHystory();
    const { handleClick} = useNavigation();
    const ToolsData = ToolHystory();
    
  return (
      <div className="w-full p-1">
        <Container className="flex-row justify-center bg-background w-full min-h-[80vh] lg:max-w-[1200px] overflow-x-clip text-[90%] sm:text-[100%] lg:text-[120%]">
          <hr className="custom-hr"/>
          <div className="mx-auto flex flex-col md:flex-row justify-between font-family-Lufga px-[12%] py-6 duration-600">
            <div className="flex flex-[2] items-center justify-center">
              <Image
                  src="/Images/Pic.png"
                  alt="commas"
                  width={800}       // adjust as needed
                  height={600}      // adjust as needed
                  className="w-[70%] lg:w-[70%] h-fit rounded-4xl border-2 border-Primary-400"
                  priority          // optional: good for above-the-fold images
              />
            </div>
            <div  className="flex flex-[3] flex-col gap-[5%] mx-auto justify-center">
              <span className="flex-[1] font-bold text-[200%] text-Primary-500">Bio</span>
              <span className="flex-[10]">I&apos;m a passionate and innovative technologist with a strong foundation in Robotics, IoT, Software Development, and Game Development. With a years of experience in Interactive media and BSc in Physics-ICT from the University of Sri Jayewardenepura, I thrive at the intersection of creativity and engineering.
                                        <br/><br/>Continuously driven by curiosity, I enjoy exploring new technologies, tools, and frameworks — and I learn quickly in fast-paced environments. I&apos;m detail-oriented, highly organized, and constantly strive to optimize for efficiency and clarity in everything I build.</span>
            </div>
          </div>

          <hr className="custom-hr"/>
          <div className='w-full h-auto justify-start flex'>
            <div className='py-[3%] not-xl:w-[100vh] flex px-[12%] z-5 font-family-Lufga dark:text-white duration-200'>
              <span className='flex-[1] font-bold text-[200%] text-Primary-500'>Educational Hystory</span>
            </div>
          </div>
          <div className='w-full flex flex-col px-[2%]'>
            {schoolData.map((exp, index) => (
              <WorkXPRow key={index} place={exp.place} position={exp.title} date={exp.time} desc={exp.description} 
                          odd={index % 2 == 0} classdataBase="lg:text-[20px] text-[12px] " classdataDesc="text-[12px] lg:text-[18px]"  nodeSize=' w-[80%] max-w-[46px]'/>
            ))}
          </div>
          <hr className="custom-hr"/>
          <div className='w-full flex-col h-auto justify-start flex'>
            <div className='py-[3%] not-xl:w-[100vh] flex px-[15%] z-5 font-family-Lufga dark:text-white duration-200'>
              <span className='flex-[1] font-bold text-[200%] text-Primary-500'>Projects</span>
            </div>
            <div className=' flex w-[full] px-[15%] z-5 font-family-Lufga duration-200 pb-[3%]'>
               <div className='p-1 px-[15%] bg-gray-50/20 w-[full] border-2 text-[120%] hover:font-bold hover:text-Primary-500 hover:bg-white/20 rounded-3xl flex justify-center cursor-pointer gap-2 group/line duration-300' 
                    onClick={() => handleClick(3)}>
                Check my Work... 
                <ArrowUpRightIcon className='hidden group-hover/line:block duration-500' weight='bold' size={25} />
               </div>
            </div>
          </div>
          
          <hr className="custom-hr"/>
          

          <div className='w-full h-auto justify-start flex'>
            <div className='py-[3%] not-xl:w-[100vh] flex px-[12%] z-5 font-family-Lufga dark:text-white duration-200'>
              <span className='flex-[1] font-bold text-[200%] text-Primary-500'>Work Hystory</span>
            </div>
          </div>
          <div className='w-full flex flex-col px-[2%]'>
            {experienceData.map((exp, index) => (
              <WorkXPRow key={index} place={exp.place} position={exp.title} date={exp.time} desc={exp.description} 
                          odd={index % 2 == 0} classdataBase="lg:text-[20px] text-[12px] " classdataDesc="text-[12px] lg:text-[18px]"  nodeSize=' w-[80%] max-w-[46px]'/>
            ))}
          </div>
          <hr className="custom-hr"/>
          <div className='w-full h-auto justify-start flex'>
            <div className='py-[3%] not-xl:w-[100vh] flex px-[12%] z-5 font-family-Lufga dark:text-white duration-200'>
              <span className='flex-[1] font-bold text-[200%] text-Primary-500'>Tools & Technologies</span>
            </div>
          </div>
          <div className='w-full mx-auto h-auto justify-center flex '>
            <div className="flex flex-wrap justify-between gap-x-8 px-[15%] py-[3%] z-5 font-family-Lufga dark:text-white duration-200">
              {ToolsData.map((exp, index) => (
                <ToolIcon key={index} imageLink={exp.link} logoName={exp.name} invert={exp.invert} className="w-[42%] md:w-[20%]"/>
              ))}            
            </div>            
          </div>
          <hr className="custom-hr"/>
          <HomeFooter />
        </Container>
      </div>
  );
}
