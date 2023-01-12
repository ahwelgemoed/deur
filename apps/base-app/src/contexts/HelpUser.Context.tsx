import { useMqttMessageListener } from '@deur/shared-hooks';
import { EMQQTTTopics } from '@deur/shared-types';
import { createContext, useContext, useEffect, useState } from 'react';

type HelpUserProviderProps = { children: React.ReactNode };
type TLimUser = {
  userId: string;
  userName: string;
};

const HelpUser = createContext<{ isConnected: boolean; user: TLimUser }>({
  isConnected: false,
  user: {
    userId: '',
    userName: '',
  },
});

export function HelpUserProvider({ children }: HelpUserProviderProps) {
  const [user, setUser] = useState<TLimUser>({
    userId: '',
    userName: '',
  });
  const [isConnected] = useMqttMessageListener(EMQQTTTopics.HELP_THIS_USER, (message) => {
    const json = JSON.parse(message.payloadString);
    if (json.reason) {
      setUser({
        userId: json.user.id,
        userName: json.user.name,
      });
    }
  });
  useEffect(() => {
    if (user.userId) {
      setTimeout(() => {
        setUser({
          userId: '',
          userName: '',
        });
      }, 1000 * 10);
    }
  }, [user]);

  return <HelpUser.Provider value={{ isConnected, user }}>{children}</HelpUser.Provider>;
}
export function useHelpUser() {
  const context = useContext(HelpUser);
  if (context === undefined) {
    throw new Error('useHelpUser must be used within a CountProvider');
  }
  return context;
}
