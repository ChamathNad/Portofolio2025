'use client';
import React, { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { CV1 } from '../PDFs';
import { BlobProvider } from '@react-pdf/renderer';
import Spinner from '../ui/spinner';



export default function DownloadButton({
    children,
    onClick,
    isGame,
}: {
    children: React.ReactNode;
    onClick?: () => void;
    isGame?: boolean;
}) {

    const [downButton,setdownButton] = useState<boolean>();
    const cvDoc = (
        <CV1
        primaryColor={isGame ? "#FB923C" : "#3C92CB"}
        BackgroundColor="#202025"
        secondaryColor={isGame ? "#FDD9AE" : "#BED9FD"}
        GameCV={isGame}
        frameImage={isGame ? "/frame.png" : "/frame2.png"}
        />
    );

    const [downloaded, setDownloaded] = useState(true);

    return (


        
        <div
            className={`
                font-family-Lufga
                cursor-pointer group justify-center mx-auto
                rounded-[60px] max-w-[450px]
                text-[16px] md:text-[20px] font-normal text-white
                flex items-center flex-2  transition duration-200 
            `}
        >
            <button 
                onClick={onClick} 
                onMouseEnter={()=> setdownButton(false)}
                className={`p-1 w-[60%]  h-[100%] border-l-2 border-b-2 border-t-2 border-white/50 duration-200  rounded-l-[60px] 
                bg-Primary-500 dark:bg-Primary-500/80  
                ${downButton? '':'group-hover:bg-Primary-500/80 dark:group-hover:bg-Primary-500'}
                 `}> 
                    {children} 
            </button>     
            <button 
                onClick={() => setDownloaded(false)}
                onMouseEnter={()=> setdownButton(true)}
                className='p-1 w-[25%]  h-[100%] border-2 border-white/50 group/download
                bg-Primary-500 group-hover:bg-Primary-500/80 
                dark:bg-Primary-500/80 dark:group-hover:bg-Primary-500
                justify-items-center duration-200 rounded-r-[60px] '> 
                {!downloaded && (
                    <BlobProvider document={cvDoc}>
                        {({ url, loading }) => {
                            useEffect(() => {
                                if (!loading && url && !downloaded) {
                                    const timer = setTimeout(() => {
                                    const link = document.createElement("a");
                                    link.href = url;
                                    link.download = "CV.pdf";
                                    link.click();
                                    setDownloaded(true);
                                    }, 200); // ⏳ wait 1 sec before downloading
                                    return () => clearTimeout(timer);                                
                                }
                            }, [url, loading, downloaded]);
                            return loading ? <Spinner attributes="border-white w-[30px] h-[30px] border-[5px] mx-auto" /> : <FaDownload className='mx-auto  duration-200'/>;                        
                        }}
                    </BlobProvider>
                )}
                {downloaded && (<FaDownload className='mx-auto  duration-200'/>)}
            </button>


            

        </div>
    );
}
