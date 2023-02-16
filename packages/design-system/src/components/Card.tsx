import { Pressable } from 'react-native';

import { View, Text } from '../index';

type CardProps = {
  classNames?: string;
  title: string;
  onClick?: () => void;
};

export const Card = (props: CardProps): JSX.Element => {
  return (
    <Pressable onPress={props.onClick}>
      <View
        className={`w-[250px] h-[350px] bg-red border border-4 p-2 rounded-md flex justify-center items-center ${props.classNames}`}
      >
        <Text className="text-[70px]  font-body text-center text-white">{props.title}</Text>
      </View>
    </Pressable>
  );
};
