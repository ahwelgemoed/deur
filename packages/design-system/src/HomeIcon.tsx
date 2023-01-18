import { WText as Text } from './utils/wrappedComponents';

type HomeIconProps = any;

export const HomeIcon = ({ style, ...props }: HomeIconProps) => (
  <Text {...props} className="text-2xl lbg-green-200 font-body">
    This is cool
  </Text>
);
