import React from 'react';

import { View, Text } from '../index';

interface HeaderProps {
  classNames?: string;
  children: React.ReactNode;
  isBig?: boolean;
}

export const Header = ({ children, classNames, isBig }: HeaderProps) => {
  return (
    <View testID="header_view">
      <Text
        className={`font-body ${isBig ? 'text-[90px]' : 'text-[20px]'} ${classNames}`}
        testID="header_text"
      >
        {children}
      </Text>
    </View>
  );
};
