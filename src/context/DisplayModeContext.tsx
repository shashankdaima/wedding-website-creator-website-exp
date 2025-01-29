import React, { createContext, useContext, useEffect, useState } from 'react';

type DisplayMode = 'mobile' | 'tablet' | 'desktop';

interface DisplayModeContextType {
  displayMode: DisplayMode;
}

const DisplayModeContext = createContext<DisplayModeContextType | undefined>(undefined);

export function useDisplayMode() {
  const context = useContext(DisplayModeContext);
  
  // If context is not available, determine display mode based on viewport
  if (context === undefined) {
    // Use viewport width for responsive behavior
    const [viewportMode, setViewportMode] = useState<DisplayMode>(() => {
      if (typeof window === 'undefined') return 'desktop';
      if (window.innerWidth < 640) return 'mobile';
      if (window.innerWidth < 1024) return 'tablet';
      return 'desktop';
    });

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 640) {
          setViewportMode('mobile');
        } else if (window.innerWidth < 1024) {
          setViewportMode('tablet');
        } else {
          setViewportMode('desktop');
        }
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { displayMode: viewportMode };
  }

  return context;
}

interface DisplayModeProviderProps {
  displayMode: DisplayMode;
  children: React.ReactNode;
}

export function DisplayModeProvider({ displayMode, children }: DisplayModeProviderProps) {
  return (
    <DisplayModeContext.Provider value={{ displayMode }}>
      {children}
    </DisplayModeContext.Provider>
  );
}
