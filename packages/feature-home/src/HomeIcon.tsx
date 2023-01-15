import { Text } from 'react-native';

type HomeIconProps = any;

export const HomeIcon = ({ style, ...props }: HomeIconProps) => (
  <Text style={[{ fontSize: 28, color: 'white' }, style]} {...props} className="bg-green-200">
    👋 S
  </Text>
);
