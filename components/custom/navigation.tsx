'use client';
import { createContext, useContext, useState, ReactNode, useEffect  } from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface NavigationContextProps {
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  handleClick: (index: number) => void;
  handleTransition: (href: string) => void;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(undefined);

function sleep(ms:number) : Promise<void>{
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const router = useRouter();
  const pathname = usePathname();
  const TransTime = 200;

  // ✅ Map routes to index
  const routeMap1: Record<string, number> = {
    '/': 1,
    '/resume': 2,
    '/project': 3,
    '/about': 4,
  };
  const indexMap: Record<number, string> = {
  1: '/',
  2: '/resume',
  3: '/project',
  4: '/about',
  };

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

  const handleClick = (index: number) => {
    
    if(index != activeIndex){
      setActiveIndex(index);
      handleTransition(indexMap[index]);
    }
  };

  // ✅ Update activeIndex whenever path changes (back/forward/swipe)
  useEffect(() => {
    setActiveIndex(routeMap1[pathname] || 1);
  }, [pathname]);
  

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
