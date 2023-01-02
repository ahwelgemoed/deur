import React from 'react';
import { Text, TextProps } from 'react-native';

export const Paragraph = ({ children, style, ...props }: TextProps) => (
  <Text {...props} className="text-red-700">
    {children}
  </Text>
);
