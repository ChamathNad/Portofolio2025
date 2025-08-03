import React from 'react';
import { useNavigation } from '../custom/navigation';
import { ArrowUpIcon, ArrowUpRightIcon, EnvelopeIcon, FacebookLogoIcon, GithubLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import SocialButton from '../custom/SocialButton';
import Image from 'next/image';

export default function HomeFooter()
{  
    const { handleClick} = useNavigation();
    const SocialData = 
      [   
        {
          links: 'mailto:chamath.nad@gmail.com',
          Logo: <EnvelopeIcon weight="bold" className='hover:text-Primary-500'  /> ,
        }, 
        {
          links: 'https://www.linkedin.com/in/chamath-nadeeshan-9301691a0/',
          Logo: <LinkedinLogoIcon weight="bold" className='hover:text-Primary-500'  />,
        }, 
        {
          links: 'https://github.com/ChamathNad',
          Logo: <GithubLogoIcon weight="bold" className='hover:text-Primary-500' />,
          footer: false,
        }, 
        {
          links: 'https://www.facebook.com/chamath.nadeeshan.397',
          Logo: <FacebookLogoIcon weight="bold" className='hover:text-Primary-500' />,
          footer: false,
        }, 
      ];

      return (
        <div className='mx-auto h-[25vh] w-full pt-2 duration-200 lg:max-w-[1500px]'>
          <div className={"w-full h-[25vh] flex flex-col justify-center group bg-gray-900 rounded-t-[25px]"}>
  
            <div className='w-full h-full flex overflow-clip'>
              <div className="absolute w-[99%] h-[25vh] overflow-hidden rounded-fade">
                <div className="w-full h-full translate-y-[15%] mix-blend-lighten opacity-10">
                  <div className="absolute inset-0 z-0 bg-[url('/Images/BG_Circut.jpg')] bg-center bg-repeat bg-[length:1500px] blur-50"/>
                  <div className="absolute inset-0 z-1 bg-[url('/Images/BG_Circut.jpg')] bg-center bg-repeat bg-[length:1500px] mix-blend-multiply animate-scroll-circuit blur-50"/>
                  <div className="absolute inset-0 z-2 bg-[url('/Images/BG_Circut.jpg')] bg-center bg-repeat bg-[length:1500px] mix-blend-plus-lighter blur-50"/>              
                </div>
              </div>
  
              <div className='flex mx-auto gap-[5%] py-[3%] grid-cols-3 not-xl:w-[100vh] justify-between px-[5%] lg:px-[15%] z-5 font-family-Lufga text-white duration-200'>
                <div className='flex flex-col flex-[5]'>
                    <Image
                        src="/Images/Base-Black-H.svg"
                        alt="Logo"
                        width={300}
                        height={100}
                        className=" w-[50%] md:w-[200px] h-[100px] duration-500 flex-[2]"
                        onClick={() => {
                            document.body.classList.toggle('dark');
                        }}
                    />
                    <div className='text-[11px] sm:text-[12px] lg:text-[18px] pt-[1%] flex-[2]'>Blending design, code, and immersive technology to build experiences that connect, From interactive UIs to real-time 3D worlds.</div>
                    <hr className="w-[100%] h-px border-1 border-gray-300 rounded-2xl"/>
                    <span className='text-[8px] md:text-[12px] lg:text-[18px] pt-[2%]  pb-[5%] flex flex-row gap-2'>
                      <span> © 2025 Chamath Nadeeshan |</span>
                      {SocialData.map((exp,index) => (<SocialButton key={index} link={exp.links} logo={exp.Logo} />))}
                    </span>
                </div>
                <div className='w-px border-1 rounded-4xl border-gray-500'></div>
                <div className='flex flex-col flex-[2] md:gap-1 text-[12px] lg:text-[18px] '>
                    <div className='font-bold  flex justify-center p-[1%] text-Primary-500'>Site map</div>
                    <div className='p-[3%] hover:font-bold hover:text-Primary-500 hover:bg-white/10 rounded-3xl flex justify-center cursor-pointer gap-2 group/line' onClick={() => handleClick(1,'/')}> Home  <ArrowUpRightIcon className='hidden group-hover/line:block' weight='bold' size={20} /></div>
                    <div className='p-[2%] hover:font-bold hover:text-Primary-500 hover:bg-white/10 rounded-3xl flex justify-center cursor-pointer gap-2 group/line' onClick={() => handleClick(2,'/resume')}>Resume <ArrowUpRightIcon className='hidden group-hover/line:block' weight='bold' size={20} /></div>
                    <div className='p-[2%] hover:font-bold hover:text-Primary-500 hover:bg-white/10 rounded-3xl flex justify-center cursor-pointer gap-2 group/line' onClick={() => handleClick(3,'/project')}>Project <ArrowUpRightIcon className='hidden group-hover/line:block' weight='bold' size={20} /></div>
                    <div className='p-[2%] hover:font-bold hover:text-Primary-500 hover:bg-white/10 rounded-3xl flex justify-center cursor-pointer gap-2 group/line' onClick={() => handleClick(4,'/about')}>Contact <ArrowUpRightIcon className='hidden group-hover/line:block' weight='bold' size={20} /></div>
                    <div className='p-[2%] hover:font-bold hover:text-Primary-500 hover:bg-white/10 rounded-3xl flex justify-center cursor-pointer gap-2 group/line' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top <ArrowUpIcon className='hidden group-hover/line:block' weight='bold' size={20} /></div>
                </div>
              </div>
                <hr className='text-white'/>
            </div>

          </div>  
        </div>
    );
};