import React from 'react';
import { Text, TextProps } from 'react-native';

export const Strong = ({ children, style, ...props }: TextProps) => (
  <Text {...props} className="text-lg text-blue-200">
    {children}
  </Text>
);
