import React from 'react';
import { Text, TextProps } from 'react-native';

export const Heading = ({ children, style, ...props }: TextProps) => (
  <Text {...props} className="text-2xl">
    {children}
  </Text>
);
