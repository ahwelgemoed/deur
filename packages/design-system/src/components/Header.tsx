import React from 'react';

import { View, Text } from '../index';

interface HeaderProps {
  classNames?: string;
  children: React.ReactNode;
}

export const Header = ({ children, classNames }: HeaderProps) => {
  return (
    <View testID="header_view">
      <Text className={`text-[90px] font-body ${classNames}`} testID="header_text">
        {children}
      </Text>
    </View>
  );
};
