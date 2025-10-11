'use client';
import Container from "@/components/custom/Container";
import HomeFooter from "@/components/HomePage/Footer";
import { EnvelopeIcon, LinkedinLogoIcon, GithubLogoIcon, FacebookLogoIcon, PhoneCallIcon, XLogoIcon,InstagramLogoIcon } from "@phosphor-icons/react";

export default function Home() {
  const SocialData = 
      [   
        {
          links: 'mailto:chamath.nad@gmail.com',
          rawlinks: 'chamath.nad@gmail.com',
          Id: 'Email',
          Logo: <EnvelopeIcon weight="fill" className='group-hover:text-Primary-500'  /> ,
        }, 
        {
          links: 'tel:+94775269153',
          rawlinks: '+94 77 526 9153',
          Id: 'Phone ',
          Logo: <PhoneCallIcon weight="fill" className='group-hover:text-Primary-500'  /> ,
        }, 
        {
          links: 'https://www.linkedin.com/in/chamath-nadeeshan-9301691a0/',
          rawlinks: 'www.linkedin.com/in/chamath-nadeeshan-9301691a0/',
          Id: 'LinkedIn ',
          Logo: <LinkedinLogoIcon weight="fill" className='group-hover:text-Primary-500'  />,
        }, 
        {
          links: 'https://github.com/ChamathNad',
          rawlinks: 'github.com/ChamathNad',
          Id: 'Github ',
          Logo: <GithubLogoIcon weight="fill" className='group-hover:text-Primary-500' />,
        }, 
        {
          links: 'https://x.com/ChamathNad',
          rawlinks: '@ChamathNad',
          Id: 'Twitter/X ',
          Logo: <XLogoIcon weight="fill" className='group-hover:text-Primary-500' />,
          footer: false,
        }, 
        {
          links: 'https://www.facebook.com/chamath.nadeeshan.397',
          rawlinks: 'Chamath Nadeeshan',
          Id: 'Facebook ',
          Logo: <FacebookLogoIcon weight="fill" className='group-hover:text-Primary-500' />,
          footer: false,
        }, 
        {
          links: 'https://www.instagram.com/chamathnad/',
          rawlinks: 'www.instagram.com/chamathnad/',
          Id: 'Instagram ',
          Logo: <InstagramLogoIcon weight="fill" className='group-hover:text-Primary-500' />,
          footer: false,
        }, 
      ];
      
  return (
        <div className="w-full p-[1%]">
          <Container className="flex flex-col justify-center bg-background w-full min-h-[80vh] ">            
          <hr className="custom-hr"/>
            <div className="max-w-2xl px-[4%] py-12 font-family-Lufga text-[15px] md:text-[20px] ">
              <h1 className="text-4xl font-bold mb-6 text-Primary-500">Let&apos;s Connect</h1>

              <p className="mb-6 dark:text-gray-200 text-gray-700">
                I&apos;m always open to collaboration, freelance opportunities, or just a good conversation about design, development, or game ideas. Feel free to reach out!
              </p>

              <div className="flex flex-col justify-between gap-4">
                {SocialData.map((exp,index) => (                    
                  <div key={index} >
                    <a className="flex flex-row items-center gap-2 group hover:font-bold" href={exp.links}>
                      <span className="text-[200%] border-2 p-[1%] border-black/30 dark:border-white/30 group-hover:border-Primary-500">
                        {exp.Logo}
                      </span>
                      <strong className="group-hover:text-Primary-500 flex-[4]">{exp.Id} </strong>
                      <span className="flex-[1]">:</span>
                      <span className="border-1 rounded-2xl p-[2%] overflow-clip flex-[8] not-md:max-w-[45%]">
                        {exp.rawlinks}                        
                      </span>
                    </a>
                  </div> 
                ))}               
                
              </div>
            </div>
            
          <hr className="custom-hr"/>
          <HomeFooter />
        </Container>
      </div>
  );
}
