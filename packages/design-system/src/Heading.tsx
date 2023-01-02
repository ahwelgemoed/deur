import React from 'react';
import { Text, TextProps } from 'react-native';

interface HeadingProps extends TextProps {
  classNames?: string;
}

export const Heading = ({ classNames, children, style, ...props }: HeadingProps) => (
  <Text {...props} className={`text-2xl ${classNames}`}>
    {children}
  </Text>
);
