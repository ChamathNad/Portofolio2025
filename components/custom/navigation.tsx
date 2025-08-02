'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface NavigationContextProps {
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  handleClick: (index: number, href: string) => void;
  handleTransition: (href: string) => void;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(undefined);

function sleep(ms:number) : Promise<void>{
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const router = useRouter();
  const TransTime = 200;

  const handleTransition = async (href: string) => {
    const container = document.querySelector<HTMLElement>(".mainContainer");
    if (container) {
      container.classList.add("page-exit");
      await sleep(TransTime); // Match animation duration
      router.push(href);
      container.classList.remove("page-exit"); // Reset for next page
    }

    const container2 = document.querySelector<HTMLElement>(".mainContainer");
    if (container2) {
      container2.classList.add("page-enter");
      await sleep(TransTime); 
      container2.classList.remove("page-enter"); // Reset for next page
    }
  };

  const handleClick = (index: number, href: string) => {
    
    if(index != activeIndex){
      setActiveIndex(index);
      handleTransition(href);
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        handleClick,
        handleTransition,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
