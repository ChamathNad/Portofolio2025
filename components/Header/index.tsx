'use client';

import React from 'react';
import Container from '../custom/Container';
import HeaderButton from '../custom/HeaderButton';
import Logo from '../custom/Logo';
import { GlobeIcon, ReadCvLogoIcon} from '@phosphor-icons/react';
import { HomeIcon, PackageIcon } from 'lucide-react';
import SideMenu from '../custom/SideMenu';
import { useNavigation } from '../custom/navigation';

export default function Header(){    

    const { activeIndex,  handleClick} = useNavigation();
    
    return (            
        <div className=''>        
            {/*PC Bar */}    
            <div className=' pl-[70px] pr-[70px] max-w-[1340px] not-lg:hidden pt-[50px] '>
                <Container className='flex flex-row gap-[20px] bg-black dark:bg-gray-300 rounded-[50px] p-[10px]'> 
                        <HeaderButton onClick={() => handleClick(1,'/')} isActive={activeIndex === 1}><HomeIcon className='mr-[10px]'/> Home</HeaderButton>
                        <HeaderButton onClick={() => handleClick(2,'/resume')} isActive={activeIndex === 2}><ReadCvLogoIcon className='mr-[10px]'/>Resume</HeaderButton>
                        <Logo />
                        <HeaderButton onClick={() => handleClick(3,'/project')} isActive={activeIndex === 3}><PackageIcon className='mr-[10px]'/>Project</HeaderButton>
                        <HeaderButton onClick={() => handleClick(4,'/about')} isActive={activeIndex === 4}><GlobeIcon className='mr-[10px]'/>Contact</HeaderButton>
                </Container>
            </div>

            {/*MOBILE Bar */}    
            <div className='lg:hidden w-full'>
                <Container className='flex flex-row justify-between items-center gap-[20px] bg-black dark:bg-gray-200 p-[2%] px-[5%]'> 
                        <SideMenu className='flex justify-center items-center ml-[3%] rounded-[15px] border-Primary-400 dark:border-black hover:border-1  w-[10%] h-auto' OnClick={handleClick} currIndex={activeIndex}/>
                        
                        <Logo attributes='flex max-w-[30%] md:max-w-[60%]'/>

                        <button className={`font-family-Lufga cursor-pointer w-[10%] h-auto text-[40px] max-w-[15%] flex justify-center items-center 
                                    bg-transparent text-white dark:text-black rounded-[15px] border-Primary-400 dark:border-black hover:border-1  ml-[3%]`}
                                    onClick={() => handleClick(2,'/resume')} >
                                        <ReadCvLogoIcon/>
                        </button>
                </Container>
            </div>

        </div>
    );
};