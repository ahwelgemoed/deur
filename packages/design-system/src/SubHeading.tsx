import React from 'react';
import { Text, TextProps } from 'react-native';

export const SubHeading = ({ children, style, ...props }: TextProps) => (
  <Text {...props} className="text-sm">
    {children}
  </Text>
);
