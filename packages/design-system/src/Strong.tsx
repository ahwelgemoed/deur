import React from 'react';
import { Text, TextProps } from 'react-native';

export const Strong = ({ children, style, ...props }: TextProps) => (
  <Text {...props} className="text-blue-900 text-2xl">
    {children}
  </Text>
);
