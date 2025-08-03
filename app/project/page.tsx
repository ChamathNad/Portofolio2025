'use client';
import Container from "@/components/custom/Container";
import EventCard from "@/components/custom/EventCard";
import FilterButton from "@/components/custom/FilterButton";
import ProjectCard from "@/components/custom/ProjectCard";
import HomeFooter from "@/components/HomePage/Footer";
import { ProjectList, EventsList, Project, Event } from "@/lib/localData";
import { GameControllerIcon, MagicWandIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { BiLogoUnity } from "react-icons/bi";
import { BsHeadsetVr } from "react-icons/bs";
import { FaMobileAlt, FaReact, FaRobot, FaStar } from "react-icons/fa";
import { IoIosFlash } from "react-icons/io";
import { SiUnrealengine } from "react-icons/si";

export default function Home() {
  
      const Taglist = [    
        {
          title : "Solo",
          icon : <FaStar className="mr-2"/>,
          color : '#cc5500',
        },
        {
          title : "Unity",
          icon : <BiLogoUnity className="mr-2"/>,
          color : "#999999",
        },  
        {
          title : "Unreal",
          icon : <SiUnrealengine className="mr-2" />,
          color : '#777777',
        },
        {
          title : "Research",
          icon : <MagnifyingGlassIcon className="mr-2" />,
          color : '#e2ac01',
        },
        {
          title : "IOT/HCI",
          icon : <FaRobot className="mr-2"  />,
          color : '#31e0eb',
        },
        {
          title : "AR/VR",
          icon : <BsHeadsetVr className="mr-2"  />,
          color : '#8800cc',
        },
        {
          title : "Design",
          icon : <MagicWandIcon className="mr-2" />,
          color : '#aa8811',
        },
        {
          title : "Games",
          icon : <GameControllerIcon  className="mr-2" />,
          color : '#cc0055',
        },
        {
          title : "Mobile",
          icon : <FaMobileAlt className="mr-2" />,
          color : '#00cc11',
        },
        {
          title : "React/Js",
          icon : <FaReact  className="mr-2"   />,
          color : '#21d9ea',
        },
        {
          title : "Flash",
          icon : <IoIosFlash className="mr-2" />,
          color : '#aa3311',
        },
        ];     
        
      const HideUnreleased = false;

      const [PList, setProjects] = useState<Project[]>([]);
      const [SList, setEvents] = useState<Event[]>([]);
      const [activeTags, setActiveTags] = useState<string[]>([]);
      const [searchTerm, setSearchTerm] = useState('');

      const toggleTag = (tag: string) => {
        setActiveTags(prev =>
          prev.includes(tag)? prev.filter(t => t !== tag) : [...prev, tag] 
        );
      };

      const clearTags = () => setActiveTags([]);

      useEffect(() => {
        ProjectList().then(setProjects);
        EventsList().then(setEvents);
        console.log(SList);
      }, []);

      const filteredData = PList.filter(item => {
        const tagMatch = activeTags.length === 0 || item.tags.some(tag => activeTags.includes(tag));   
        const searchMatch = JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase());
        return tagMatch && searchMatch;
      }).map(item => {
        if (HideUnreleased && item.enable === false) {
          return {
            ...item,
            cover: "Image_not_available_qmqzal",
            images: [],
            videos: []
          };
        }
        return item;
      });

      const filteredEvents = SList.filter(item => {
        const tagMatch = activeTags.length === 0 || item.tags.some(tag => activeTags.includes(tag));   
        const searchMatch = JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase());
        return tagMatch && searchMatch;
      }).map(item => {
        if (HideUnreleased && item.enable === false) {
          return {
            ...item,
            cover: "Image_not_available_qmqzal",
          };
        }
        return item;
      });

      const isActive = (tag:string) => activeTags.includes(tag);

  return (    
        <div className="w-full p-1">
          <Container className="flex flex-col w-full min-h-[80vh] lg:max-w-[1200px] ">            
            <hr className="custom-hr2"/>
            
            {/* TAGS */}
            <div className='w-full flex-row mx-auto justify-center flex h-auto gap-2'>
              
              <div className="flex flex-[70%] flex-wrap justify-start font-family-Lufga dark:text-white duration-200 px-2">
                <FilterButton onClick={() => clearTags() }> All </FilterButton>
                {Taglist.map((exp, index) => (
                  <FilterButton key={index} color={exp.color} onClick={() => toggleTag(exp.title)} isActive ={isActive(exp.title)}> {exp.icon} {exp.title} </FilterButton>
                ))}            
                  
              </div>  
              
              {/* PC BAR */}
              <div className="flex-[30%] justify-between items-center font-family-Lufga dark:text-white duration-200 hidden md:block">          
                <div className={`mb-4 bg-black/10 dark:bg-white/10 border-2 w-full border-black/30 dark:border-white/30 rounded-2xl flex flex-row items-center p-2 max-h-[60px] `}>
                  <input
                    type="text"
                    placeholder="Search ..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-[90%] outline-none"
                  />
                  <MagnifyingGlassIcon size={30}/>
                </div>
              </div>   

            </div>            
            <hr className="custom-hr2"/>
            
            {/* CARDS */}
            <h1 className="not-lg:mx-auto text-[40px] lg:text-[50px] font-bold mt-2 text-Primary-500 font-family-Lufga px-[6%] ">Projects</h1>
            
            {/* MOBILE BAR */}
            <div className="flex justify-center items-center font-family-Lufga dark:text-white duration-200 md:hidden">          
              <div className={`mx-10 my-4 border-2 w-full border-black/30 dark:border-white/30 rounded-2xl flex flex-row items-center p-1 max-h-[60px] `}>
                <input
                  type="text"
                  placeholder="Search ..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-[90%] outline-none"
                />
                <MagnifyingGlassIcon size={30}/>
              </div>
            </div>  
            
            <div className='w-full mx-auto h-auto justify-center flex min-h-[20vh]'>
              <div className="flex flex-wrap gap-5 justify-between py-[2%] font-family-Lufga dark:text-white duration-200">
                {filteredData.map((exp, index) => (
                  <ProjectCard key={index} 
                  logoName={exp.title} 
                  imageLink={exp.cover} 
                  date={exp.data} 
                  place={exp.org}
                  size ={exp.size}
                  tags={exp.tags} 
                  images={exp.images} 
                  quote={exp.quote}
                  description={exp.description}
                  cquote ={exp.cquote}
                  contributiondesc={exp.cdescription}
                  linkList = {exp.linkList}
                  videos ={exp.videos}
                  />
                ))}            
              </div>            
            </div>
            
            <hr className="custom-hr2"/>
            
            <h1 className="not-lg:mx-auto text-[40px] lg:text-[50px] font-bold mt-2 text-Primary-500 font-family-Lufga px-[6%]">Events</h1>
            
            <div className='w-full mx-auto h-auto justify-center flex min-h-[20vh]'>
              <div className="flex flex-wrap gap-5 justify-between py-[2%] font-family-Lufga dark:text-white duration-200">
                {filteredEvents.map((exp, index) => (
                  <EventCard key={index}  data={exp}
                  />
                ))}            
              </div>            
            </div>
            <hr className="custom-hr2"/>
            <HomeFooter />
          </Container>
        </div>
  );
}
