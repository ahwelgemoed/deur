import { Header } from './Header';

export default {
  title: 'ui/Headers',
  component: Header,
};

const Template = (args: any) => <Header {...args} />;

export const Basic: any = Template.bind({});

Basic.args = {
  children: '@deur header',
  classNames: '',
  isBig: false,
};
