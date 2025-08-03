
import React, { useState } from 'react';
import { useNavigation } from "@/components/custom/navigation";
import ToggleButtons from "@/components/custom/ToggleButton";
import { StarIcon } from "lucide-react";
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import Image from 'next/image';

export default function HomePage()
{       
  const { handleClick} = useNavigation();
  const [openBox, setopenBox] = useState(false);

    return (
        <div className='w-[100%] lg:h-[1000px] not-lg:h-[800px]'>
        <div className={"w-full flex justify-center group not-lg:hidden"}>
          <div className="absolute translate-y-[600px] translate-x-[0px] w-[800px] h-[400px] bg-gray-300 rounded-t-full z-5 " />            

          <div className="relative flex justify-center  ">
            <div className="w-[913px] h-[266px]"> 
            
              <div className="mx-auto 
                  translate-y-[120px] w-[200px] h-[55px] 
                  border border-black dark:border-white rounded-[50px]
                  group-hover:translate-y-160 transition-transform duration-400
                  flex items-center justify-center text-[30px] font-family-Lufga">
                Hello!
              </div>
              <Image 
                src="/Images/commas.svg"
                alt="commas"
                width={300}
                height={100}
                className="w-[50px] h-[50px] relative translate-x-[540px] translate-y-[20px] rotate-160                
                  group-hover:translate-y-160 transition-transform duration-600"
              />
              <div className="text-center text-[90px] relative translate-y-[100px] translate-x-[0px] font-family-Lufga              
                  group-hover:translate-y-160 transition-transform duration-500" >
                I&apos;m 
                <span className="text-Primary-500"> Chamath</span>,
              </div>
              <Image 
                src="/Images/commas.svg"
                alt="commas"
                width={300}
                height={100}
                className="w-[75px] h-[75px] relative translate-x-[145px] translate-y-[50px]                
                  group-hover:translate-y-160 transition-transform duration-600"
              />

              <div className="absolute w-[300px] translate-y-[90px] lg:translate-x-[-30px] xl:translate-x-[-120px]               
                  group-hover:translate-y-[-100px] transition-transform duration-600" >
                <Image 
                  src="/Images/quote-up.svg"
                  alt="Quote"
                  width={300}
                  height={100}
                  className="w-[50px] h-[50px]"
                />
                <span className="text-[25px] font-family-Lufga">Building games since I first touched a keyboard,</span>
              </div>              

              <div className=" relative">
                <Image 
                src="/Images/Lootbox/Box_Base.png"
                alt="Box_base"
                width={300}
                height={100}
                className="w-[378px] h-[333px] absolute translate-x-[285px] translate-y-[250px] z-10"
                />
                <Image 
                  src="/Images/Lootbox/Box_bg-Light.png"
                  alt="Box_bglight"
                width={300}
                height={100}
                  className="w-[101px] h-[85px] absolute translate-x-[420px] translate-y-[260px] z-15  
                    group-hover:translate-y-62 transition-transform duration-600"
                />
                <Image 
                  src="/Images/Lootbox/Box_lid1.png"
                  alt="Box_lid1"
                  width={300}
                  height={100}
                  className="w-[54px] h-[22px] absolute translate-x-[464px] translate-y-[282px] z-16
                    group-hover:translate-y-62 group-hover:translate-x-118 transition-transform duration-600"
                />
                <Image 
                  src="/Images/Lootbox/Box_lid2.png"
                  alt="Box_lid2"
                  width={300}
                  height={100}
                  className="w-[54px] h-[22px] absolute translate-x-[425px] translate-y-[282px] z-17   
                    group-hover:translate-y-62 group-hover:translate-x-105 transition-transform duration-600"
                />
                <Image 
                  src="/Images/Lootbox/Box_Top.png"
                  alt="Box_base"
                  width={300}
                  height={100}
                  className="w-[383px] h-[173px] absolute translate-x-[283px] translate-y-[244px] z-20         
                    group-hover:translate-y-52.5 transition-transform duration-600"
                />
                <Image 
                  src="/Images/Lootbox/Box_Light.png"
                  alt="Box_base"
                  width={300}
                  height={100}
                  className="w-[750px] h-[200px] absolute translate-x-[100px] translate-y-[280px] z-25  opacity-0       
                    group-hover:opacity-100 group-hover:h-[500px] group-hover:translate-y-[120px] duration-600 screen"
                />
                <Image 
                  src="/Images/Lootbox/Shodow.png"
                  alt="Box_Shadow"
                  width={300}
                  height={100}
                  className="w-[495px] h-[225px] absolute translate-x-[340px] translate-y-[370px] z-9 "
                />
              </div>

              <div className="absolute w-[300px] translate-y-[90px] lg:translate-x-[670px] xl:translate-x-[800px]             
                  group-hover:translate-y-[-100px] transition-transform duration-600" >
                
                <span className="flex flex-wrap gap-3 pb-2"><StarIcon size={30} className="text-Primary-500 fill-Primary-500"/>
                <StarIcon size={30} className="text-Primary-500 fill-Primary-500"/>
                <StarIcon size={30} className="text-Primary-500 fill-Primary-500"/>
                <StarIcon size={30} className="text-Primary-500 fill-Primary-500"/>
                <StarIcon size={30} className="text-Primary-500 fill-Primary-500"/></span>
                <span className="text-[25px] font-family-Lufga">Game dev. Web dev. Whatever needs <br/>  — I&apos;ll make it happen.</span>
              </div>

              <ToggleButtons 
                children1={<><span>Projects</span></>}
                children2={<><span>Resume</span></>} 
                Link1={() => handleClick(3,'/project')}
                Link2={() => handleClick(2,'/resume')}
                />

              {/* Splash Images */}
              <Image src="/Images/Splash/cxVWm801 1.svg" alt="commas"  width={300} height={100}
                className="w-[55px] h-[55px] absolute translate-x-[400px] translate-y-[200px]                  
                  group-hover:translate-y-[0px] group-hover:translate-x-[280px] transition-transform duration-600 z-8"
              />
              <Image src="/Images/Splash/Group 4.svg" alt="commas"  width={300} height={100}
                className="w-[253px] h-[187px] absolute translate-x-[400px] translate-y-[200px]                  
                  group-hover:translate-y-[280px] group-hover:translate-x-[680px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/Group 5.svg" alt="commas"  width={300} height={100}
                className="w-[238px] h-[150px] absolute translate-x-[400px] translate-y-[200px]                 
                  group-hover:translate-y-[280px] group-hover:translate-x-[80px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/Group 6.svg" alt="commas"  width={300} height={100}
                className="w-[238px] h-[115px]  absolute translate-x-[400px] translate-y-[200px]                 
                  group-hover:translate-y-[80px] group-hover:translate-x-[620px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/Group 7.svg" alt="commas"  width={300} height={100}
                className="w-[158px] h-[75px] absolute translate-x-[400px] translate-y-[200px]                  
                  group-hover:translate-y-[80px] group-hover:translate-x-[550px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/Group 9.svg" alt="commas"  width={300} height={100}
                className="w-[100px] h-[100px] absolute translate-x-[400px] translate-y-[200px]                 
                  group-hover:translate-y-[60px] group-hover:translate-x-[250px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/Group 10.svg" alt="commas"  width={300} height={100}
                className="w-[120px] h-[120px] absolute translate-x-[400px] translate-y-[200px]                  
                  group-hover:translate-y-[-20px] group-hover:translate-x-[520px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/Group.svg" alt="commas"  width={300} height={100}
                className="w-[80px] h-[80px] absolute translate-x-[400px] translate-y-[200px]                  
                  group-hover:translate-y-[280px] group-hover:translate-x-[50px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/cxVWm801 1.svg" alt="commas"  width={300} height={100}
                className="w-[50px] h-[50px] absolute translate-x-[400px] translate-y-[200px]                  
                  group-hover:translate-y-[50px] group-hover:translate-x-[680px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/t6XNDw01 1.svg" alt="commas"  width={300} height={100}
                className="w-[70px] h-[70px] absolute translate-x-[400px] translate-y-[200px]                 
                  group-hover:translate-y-[20px] group-hover:translate-x-[150px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/Vector.svg" alt="commas"  width={300} height={100}
                className="w-[100px] h-[100px] absolute translate-x-[400px] translate-y-[200px]                  
                  group-hover:translate-y-[180px] group-hover:translate-x-[170px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/Vector-1.svg" alt="commas"  width={300} height={100}
                className="w-[80px] h-[80px] absolute translate-x-[400px] translate-y-[200px]                 
                  group-hover:translate-y-[380px] group-hover:translate-x-[200px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/Vector-2.svg" alt="commas"  width={300} height={100}
                className="w-[80px] h-[80px] absolute translate-x-[400px] translate-y-[200px]                 
                  group-hover:translate-y-[100px] group-hover:translate-x-[190px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/Vector-3.svg" alt="commas"  width={300} height={100}
                className="w-[90px] h-[90px] absolute translate-x-[400px] translate-y-[200px]                  
                  group-hover:translate-y-[260px] group-hover:translate-x-[690px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/Vector-4.svg" alt="commas"  width={300} height={100}
                className="w-[30px] h-[30px] absolute translate-x-[400px] translate-y-[200px]                  
                  group-hover:translate-y-[200px] group-hover:translate-x-[780px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/Vector-5.svg" alt="commas"  width={300} height={100}
                className="w-[30px] h-[30px] absolute translate-x-[400px] translate-y-[200px]                 
                  group-hover:translate-y-[380px] group-hover:translate-x-[120px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/Vector-6.svg" alt="commas"  width={300} height={100}
                className="w-[90px] h-[90px] absolute translate-x-[400px] translate-y-[200px]                 
                  group-hover:translate-y-[400px] group-hover:translate-x-[90px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/Vector-7.svg" alt="commas"  width={300} height={100}
                className="w-[90px] h-[90px] absolute translate-x-[400px] translate-y-[200px]                 
                  group-hover:translate-y-[100px] group-hover:translate-x-[830px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/Vector-8.svg" alt="commas"  width={300} height={100}
                className="w-[20px] h-[20px] absolute translate-x-[400px] translate-y-[200px]                 
                  group-hover:translate-y-[220px] group-hover:translate-x-[120px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/Vector-8.svg" alt="commas"  width={300} height={100}
                className="w-[20px] h-[20px] absolute translate-x-[400px] translate-y-[200px]               
                  group-hover:translate-y-[200px] group-hover:translate-x-[700px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/Vector-8.svg" alt="commas"  width={300} height={100}
                className="w-[20px] h-[20px] absolute translate-x-[400px] translate-y-[200px]                 
                  group-hover:translate-y-[280px] group-hover:translate-x-[820px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/Vectorh.svg" alt="commas"  width={300} height={100}
                className="w-[60px] h-[60px] absolute translate-x-[400px] translate-y-[200px]                  
                  group-hover:translate-y-[0px] group-hover:translate-x-[420px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/Vector-5.svg" alt="commas"  width={300} height={100}
                className="w-[30px] h-[30px] absolute translate-x-[400px] translate-y-[200px]                 
                  group-hover:translate-y-[100px] group-hover:translate-x-[380px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/Vector-8.svg" alt="commas"  width={300} height={100}
                className="w-[30px] h-[30px] absolute translate-x-[400px] translate-y-[200px]               
                  group-hover:translate-y-[80px] group-hover:translate-x-[470px] transition-transform duration-600  z-8"
              />
              <Image src="/Images/Splash/robot.svg" alt="commas"  width={300} height={100}
                className="w-[80px] h-[80px] absolute translate-x-[400px] translate-y-[200px]               
                  group-hover:translate-y-[100px] group-hover:translate-x-[20px] transition-transform duration-600  z-8"
              />




            </div>    
            </div>  
          </div>
          
        {/*MOBILE VERSION*/}
        <div className={"w-[100%] flex justify-center group lg:hidden overflow-x-clip"}>
          <div className="absolute translate-y-[500px] translate-x-[0px] w-full h-[12%] bg-gray-300 rounded-t-full z-5 " />            
          
          <div className="relative flex justify-center">
            <div className=" h-[266px] ">
                <div className={`mx-auto 
                                w-[120px] h-[30px] border border-black dark:border-white rounded-[50px]
                                flex items-center justify-center text-[18px] font-family-Lufga transition-transform duration-600
                                ${openBox ? 'translate-y-[560px]' : 'translate-y-[50px]'}`} >  
                    Hello!
                </div>
                <Image 
                    src="/Images/commas.svg"
                    alt="commas"
                    width={300}
                    height={100}
                    className={`w-[30px] h-[30px] relative translate-x-[130px] rotate-160 transition-transform duration-600
                                ${openBox ? 'translate-y-150': 'translate-y-[-10px]'}`}
                />
                <div className={`text-center text-[30px] relative translate-x-[0px] font-family-Lufga transition-transform duration-500
                                ${openBox ? 'translate-y-160':'translate-y-[50px]'}`} >
                    I&apos;m <span className="text-Primary-500"> Chamath</span>,
                </div>
                <Image 
                    src="/Images/commas.svg"
                    alt="commas"
                    width={300}
                    height={100}
                    className={`w-[40px] h-[40px] relative translate-x-[-40px] transition-transform duration-600
                    ${openBox ? 'translate-y-120': 'translate-y-[30px]'}`}
                />
                <div className={`absolute w-[160px] translate-x-[-80px] transition-transform duration-500
                  ${openBox ? 'translate-y-[-70px]': 'translate-y-[70px]'}`}>
                    <Image 
                    src="/Images/quote-up.svg"
                    alt="Quote"   width={300} height={100}
                    className="w-[30px] h-[30px]"
                    />
                    <span className="text-[15px] font-family-Lufga">Building games since I first touched a keyboard,</span>
                </div>                  
                <div className={`absolute w-[160px] translate-x-[110px]  transition-transform duration-600           
                    ${openBox ? 'translate-y-[-70px]': 'translate-y-[70px]'}`} >
                    
                    <span className="flex flex-wrap gap-1 pb-2">
                    <StarIcon size={18} className="text-Primary-500 fill-Primary-500"/>
                    <StarIcon size={18} className="text-Primary-500 fill-Primary-500"/>
                    <StarIcon size={18} className="text-Primary-500 fill-Primary-500"/>
                    <StarIcon size={18} className="text-Primary-500 fill-Primary-500"/>
                    <StarIcon size={18} className="text-Primary-500 fill-Primary-500"/></span>
                    <span className="text-[15px] font-family-Lufga">Game dev. Web dev. Whatever needs <br/>  — I&apos;ll make it happen.</span>
                </div>

                <div className="relative cursor-pointer" onClick={() => setopenBox(!openBox)}>
                    <Image 
                    src="/Images/Lootbox/Box_Base.png"
                    alt="Box_base"  width={300} height={100}
                    className="w-[180px] h-[150px] absolute translate-x-[10px] translate-y-[300px] z-10"
                    />
                    <Image 
                    src="/Images/Lootbox/Box_bg-Light.png"
                    alt="Box_bglight"  width={300} height={100}
                    className={`w-[50px] h-[30px] absolute translate-x-[75px] z-15  transition-transform duration-600 
                        ${openBox? 'translate-y-[280px] ':'translate-y-[290px] '}`}
                    />
                    <Image 
                    src="/Images/Lootbox/Box_lid1.png"
                    alt="Box_lid1"  width={300} height={100}
                    className={`w-[30px] h-[14px] absolute transition-transform duration-600  z-17
                        ${openBox? 'translate-y-[282px] translate-x-[99px] ':'translate-y-[300px]  translate-x-[95px] '}`}
                    />
                    <Image 
                    src="/Images/Lootbox/Box_lid2.png"
                    alt="Box_lid2"  width={300} height={100}
                    className={`w-[30px] h-[14px] absolute z-17 transition-transform duration-600 
                        ${openBox? 'translate-y-[282px] translate-x-[69px] ':'translate-y-[300px]   translate-x-[72px] '}`}
                    />
                    <Image 
                    src="/Images/Lootbox/Box_Top.png"
                    alt="Box_base"  width={300} height={100}
                    className={`w-[180px] h-[103px] absolute translate-x-[10px]  z-20 transition-transform duration-600        
                        ${openBox? 'translate-y-[260px]':'translate-y-[278px]'}`}
                    />
                    <Image 
                    src="/Images/Lootbox/Box_Light.png"
                    alt="Box_base"  width={300} height={100}
                    className={`absolute w-[350px] max-w-[200%] translate-x-[-75px] z-25 screen duration-600
                        ${openBox? 'translate-y-[225px] opacity-100 h-[250px]' : 'translate-y-[320px] opacity-0 h-[100px]'}`}
                    />
                    <Image 
                    src="/Images/Lootbox/Shodow.png"
                    alt="Box_Shadow"  width={300} height={100}
                    className="w-[300px] h-[115px] absolute translate-x-[45px] translate-y-[340px] z-9 "
                    />
                </div>


                <div className="relative flex max-w-[100%] translate-y-[480px] z-25">
                    <button     
                        onClick={() => handleClick(2,'/project')}               
                        className="
                            font-family-Lufga
                            cursor-pointer border-Primary-400
                            w-[120px] h-[50px] rounded-[60px] text-[20px] 
                            flex items-center flex-2 justify-center transition duration-200
                            bg-Primary-500  font-bold  text-white border-2"                      
                    >
                        Projects <ArrowUpRightIcon size={22} weight="bold" />
                    </button>
                </div>


              {/* Splash Images +100 -250*/}
              <Image src="/Images/Splash/cxVWm801 1.svg" alt="commas"   width={300} height={100}
                className={`w-[40px] h-[40px] absolute transition-transform duration-600 z-8            
                  ${openBox? 'translate-y-[100px] translate-x-[30px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/Group 4.svg" alt="commas"  width={300} height={100}
                className={`w-[150px] h-[100px] absolute transition-transform duration-600 z-8     
                  ${openBox? 'translate-y-[300px] translate-x-[170px]':'translate-x-[15px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/Group 5.svg" alt="commas"  width={300} height={100}
                className={`w-[150px] h-[100px] absolute transition-transform duration-600 z-8  
                  ${openBox? 'translate-y-[280px] translate-x-[-120px]':'translate-x-[15px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/Group 6.svg" alt="commas"  width={300} height={100}
                className={`w-[120px] h-[75px] absolute transition-transform duration-600 z-8 
                  ${openBox? 'translate-y-[170px] translate-x-[180px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/Group 7.svg" alt="commas"  width={300} height={100}
                className={`w-[95px] h-[50px] absolute transition-transform duration-600 z-8 
                  ${openBox? 'translate-y-[160px] translate-x-[150px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/Group 9.svg" alt="commas"  width={300} height={100}
                className={`w-[45px] h-[45px] absolute transition-transform duration-600 z-8
                  ${openBox? 'translate-y-[170px] translate-x-[30px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/Group 10.svg" alt="commas"  width={300} height={100}
                className={`w-[80px] h-[80px] absolute transition-transform duration-600 z-8
                  ${openBox? 'translate-y-[100px] translate-x-[120px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/Group.svg" alt="commas"  width={300} height={100}
                className={`w-[60px] h-[60px] absolute  transition-transform duration-600 z-8 
                  ${openBox? 'translate-y-[280px] translate-x-[-150px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/cxVWm801 1.svg" alt="commas"  width={300} height={100}
                className={`w-[40px] h-[40px] absolute transition-transform duration-600 z-8 
                  ${openBox? 'translate-y-[120px] translate-x-[220px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/t6XNDw01 1.svg" alt="commas"  width={300} height={100}
                className={`w-[50px] h-[50px] absolute transition-transform duration-600 z-8 
                  ${openBox? 'translate-y-[120px] translate-x-[-50px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/Vector.svg" alt="commas"  width={300} height={100}
                className={`w-[60px] h-[60px] absolute transition-transform duration-600 z-8      
                  ${openBox? 'translate-y-[200px] translate-x-[-60px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/Vector-1.svg" alt="commas"  width={300} height={100}
                className={`w-[60px] h-[60px] absolute transition-transform duration-600 z-8   
                  ${openBox? 'translate-y-[350px] translate-x-[-60px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/Vector-2.svg" alt="commas"  width={300} height={100}
                className={`w-[60px] h-[60px] absolute transition-transform duration-600 z-8    
                  ${openBox? 'translate-y-[170px] translate-x-[-40px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/Vector-3.svg" alt="commas"  width={300} height={100}
                className={`w-[70px] h-[70px] absolute transition-transform duration-600 z-8 
                  ${openBox? 'translate-y-[270px] translate-x-[200px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/Vector-4.svg" alt="commas"  width={300} height={100}
                className={`w-[20px] h-[20px] absolute transition-transform duration-600 z-8 
                  ${openBox? 'translate-y-[150px] translate-x-[50px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/Vector-5.svg" alt="commas"  width={300} height={100}
                className={`w-[20px] h-[20px] absolute transition-transform duration-600 z-8 
                  ${openBox? 'translate-y-[330px] translate-x-[-110px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/Vector-6.svg" alt="commas"  width={300} height={100}
                className={`w-[60px] h-[60px] absolute transition-transform duration-600 z-8    
                  ${openBox? 'translate-y-[350px] translate-x-[-130px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/Vector-7.svg" alt="commas"  width={300} height={100}
                className={`w-[60px] h-[60px] absolute transition-transform duration-600 z-8    
                  ${openBox? 'translate-y-[150px] translate-x-[300px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/Vector-8.svg" alt="commas"  width={300} height={100}
                className={`w-[20px] h-[20px] absolute transition-transform duration-600 z-8  
                  ${openBox? 'translate-y-[280px] translate-x-[310px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/Vector-8.svg" alt="commas"  width={300} height={100}
                className={`w-[20px] h-[20px] absolute transition-transform duration-600 z-8 
                  ${openBox? 'translate-y-[240px] translate-x-[240px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/Vector-8.svg" alt="commas"  width={300} height={100}
                className={`w-[20px] h-[20px] absolute transition-transform duration-600 z-8  
                  ${openBox? 'translate-y-[150px] translate-x-[100px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/Vectorh.svg" alt="commas"  width={300} height={100}
                className={`w-[40px] h-[40px] absolute transition-transform duration-600 z-8   
                  ${openBox? 'translate-y-[80px] translate-x-[80px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/Vector-5.svg" alt="commas"  width={300} height={100}
                className={`w-[20px] h-[20px] absolute transition-transform duration-600 z-8   
                  ${openBox? 'translate-y-[220px] translate-x-[280px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/Vector-8.svg" alt="commas"  width={300} height={100}
                className={`w-[20px] h-[20px] absolute transition-transform duration-600 z-8 
                  ${openBox? 'translate-y-[250px] translate-x-[-70px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />
              <Image src="/Images/Splash/robot.svg" alt="commas"  width={300} height={100}
                className={`w-[50px] h-[50px] absolute transition-transform duration-600 z-8
                  ${openBox? 'translate-y-[200px] translate-x-[-130px]':'translate-x-[75px] translate-y-[250px] ' } `}
              />


            </div>
          </div>
        </div>

        </div>
    );
};