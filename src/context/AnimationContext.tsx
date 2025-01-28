import { createContext, useContext, ReactNode } from 'react';

interface AnimationContextType {
  enableAnimations: boolean;
}

const AnimationContext = createContext<AnimationContextType>({ enableAnimations: true });

export function useAnimation() {
  return useContext(AnimationContext);
}

interface AnimationProviderProps {
  children: ReactNode;
  enableAnimations?: boolean;
}

export function AnimationProvider({ children, enableAnimations = true }: AnimationProviderProps) {
  return (
    <AnimationContext.Provider value={{ enableAnimations }}>
      {children}
    </AnimationContext.Provider>
  );
}
