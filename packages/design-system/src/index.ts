import { styled } from 'nativewind';
import { View as OView, Text as OText, TextInput as OTextInput } from 'react-native';
export * from './components/Header';
export * from './components/Card';
export * from './components/MainLayout/MainLayout';

const View = styled(OView);
const Text = styled(OText);
const TextInput = styled(OTextInput);
export { View, Text, TextInput };
