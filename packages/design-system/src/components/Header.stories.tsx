import { Header } from './Header';

export default {
  title: 'ui/Headers',
  component: Header,
};

const Template = (args: any) => <Header {...args} />;

export const Basic: any = Template.bind({});

Basic.args = {
  children: 'Welkom bij @deur',
  classNames: 'text-[90px] font-body bg-red-900 dark:bg-blue-500',
};
