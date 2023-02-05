import React from 'react';

import { View, Text } from '../index';

interface HeaderProps {
  classNames?: string;
  children: React.ReactNode;
}

export const Header = ({ children, classNames }: HeaderProps) => {
  return (
    <View testID="header_view">
      <Text
        className={`text-[90px] font-body bg-red-900 dark:bg-blue-500 ${classNames}`}
        testID="header_text"
      >
        {children}
      </Text>
    </View>
  );
};
