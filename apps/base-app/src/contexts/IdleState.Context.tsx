import { View } from '@deur/design-system';
import { useRouter, usePathname } from 'expo-router';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

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
  const [active, setActive] = useState(true);
  const pathName = usePathname();
  const router = useRouter();
  const timeOutRef = useRef<NodeJS.Timeout>();

  const setToInactive = () => {
    setActive(false);
  };
  const setToActive = () => {
    setActive(true);
  };

  useEffect(() => {
    if (pathName === '/initial-device-setup') {
      return;
    }
    onScreenHasBeenPressedOn();
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

  const onScreenHasBeenPressedOn = () => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
    timeOutRef.current = setTimeout(() => {
      setToInactive();
    }, 5000);

    return true; // Hack to get onStartShouldSetResponder to work
  };

  return (
    <IdleContext.Provider value={{ isActive: active, setToInactive, setToActive }}>
      <View onStartShouldSetResponder={() => onScreenHasBeenPressedOn()}>{children}</View>
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
