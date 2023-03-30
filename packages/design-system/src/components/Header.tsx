import React from 'react';

import { View, Text } from '..';

interface HeaderProps {
  classNames?: string;
  children: React.ReactNode;
  isBig?: boolean;
}

export const Header = ({ children, classNames, isBig }: HeaderProps) => {
  return (
    <View>
      <Text className={`font-body ${isBig ? 'text-[80px]' : 'text-[20px]'} ${classNames} `}>
        {children}
      </Text>
    </View>
  );
};
