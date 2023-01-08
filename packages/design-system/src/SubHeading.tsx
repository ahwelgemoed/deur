import React from 'react';
import { Text, TextProps } from 'react-native';

interface SubHeadingProps extends TextProps {
  classNames?: string;
}

export const SubHeading = ({ classNames, children, style, ...props }: SubHeadingProps) => {
  console.log('children', classNames);
  return (
    <Text {...props} className={`text-sm  ${classNames}`}>
      {children}
    </Text>
  );
};
