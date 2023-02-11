import { useRouter, usePathname } from 'expo-router';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import UserInactivity from 'react-native-user-inactivity';

type IdleStateProviderProps = { children: React.ReactNode };

const IdleContext = createContext<{
  isActive: boolean;
  setToInactive: () => void;
  setToActive: () => void;
}>({
  isActive: false,
  setToInactive: () => {},
  setToActive: () => {},
});

export function IdleStateProvider({ children }: IdleStateProviderProps) {
  const pathName = usePathname();
  const router = useRouter();
  const idleTime = useRef(10_0000);

  const setToInactive = () => {
    setActive(false);
  };
  const setToActive = () => {
    setActive(true);
  };

  const [active, setActive] = useState(true);

  useEffect(() => {
    if (active) {
      // GO TO HOME PAGE
      // WE do this as Router this is used for when we automatically go to a page from idle and manually set Active mode
      if (pathName === '/idle') {
        router.push('/');
      }
    } else {
      // GO TO IDLE PAGE
      router.push('/idle');
    }
  }, [active]);

  return (
    <IdleContext.Provider value={{ isActive: active, setToInactive, setToActive }}>
      <UserInactivity
        isActive={active}
        // timeForInactivity={pathName === '/' ? 5000 : 10_0000}
        timeForInactivity={idleTime.current}
        onAction={(isActive: boolean) => {
          if (!isActive) {
            setActive(isActive);
          }
        }}
      >
        {children}
      </UserInactivity>
    </IdleContext.Provider>
  );
}
export function useSetToIdle() {
  const context = useContext(IdleContext);
  if (context === undefined) {
    throw new Error('useSetToIdle must be used within a CountProvider');
  }
  return context;
}
