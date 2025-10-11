import Image from "next/image";

export default function Logo({
                attributes,
            }: {
                attributes?: string;
            }) {
    return (
        <div className={attributes}>

        <div className="not-lg:hidden w-[300px] flex flex-col items-center group transition-all duration-500">
            <div className='flex  flex-col items-center 
             w-[300px] h-[64px] rounded-[50px] 
             bg-gray-700 dark:bg-gray-200 
             group transition-all duration-500 group-hover:'>
            
            <Image
                src="/Images/Base-White-H.svg"
                alt="Logo"
                width={300}
                height={100}
                className="not-dark:hidden w-[250px] h-[64px] flex items-center transition-transform duration-500 group-hover:scale-150 group-hover:opacity-100"
                onClick={() => {
                    document.body.classList.toggle('dark');
                }}
            />
            <Image
                src="/Images/Base-Black-H.svg"
                alt="Logo"
                width={300}
                height={100}
                className="dark:hidden w-[250px] h-[64px] flex items-center transition-transform duration-500 group-hover:scale-150 group-hover:opacity-100"
                onClick={() => {
                    document.body.classList.toggle('dark');
                }}
            />
            </div>
        </div>
        <div className="lg:hidden flex">                        
            <Image
                src="/Images/Base-White-H.svg"
                alt="Logo"
                width={300}
                height={100}
                className="not-dark:hidden w-[250px] h-[64px]  items-center transition-transform duration-500"
                onClick={() => {
                    document.body.classList.toggle('dark');
                }}
            />

            <Image
                src="/Images/Base-Black-H.svg"
                alt="Logo"
                width={300}
                height={100}
                className="dark:hidden w-[250px] h-[64px]  items-center transition-transform duration-500"
                onClick={() => {
                    document.body.classList.toggle('dark');
                }}
            />

        </div>

        </div>
    );
}
