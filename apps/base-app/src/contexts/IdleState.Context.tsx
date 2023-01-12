import { useNavigation, useRouter } from 'expo-router';
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
  const router = useRouter();
  const nav = useNavigation();
  const idleTime = useRef(10_000);

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
      // @ts-ignore
      if (nav.getCurrentRoute()?.path === '/idle') {
        router.push({ pathname: '/' });
      }
    } else {
      // GO TO IDLE PAGE
      router.push({ pathname: '/idle' });
    }
  }, [active]);

  return (
    <IdleContext.Provider value={{ isActive: active, setToInactive, setToActive }}>
      <UserInactivity
        isActive={active}
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
/**
 * Get Data from API
 * Push To Local Storage
 *
 */