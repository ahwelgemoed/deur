import React from 'react';
import { Text, TextProps } from 'react-native';

interface StrongProps extends TextProps {
  classNames?: string;
}

export const Strong = ({ classNames, children, style, ...props }: StrongProps) => (
  <Text {...props} className={`text-blue-600 text-2xl uppercase ${classNames}`}>
    {children}
  </Text>
);
