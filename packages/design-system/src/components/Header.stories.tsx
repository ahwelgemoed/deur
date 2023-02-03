import { Header } from './Header';

export default {
  title: 'ui/Button/LmButton',
  component: Header,
};

const Template = (args: any) => <Header {...args} />;

export const Basic: any = Template.bind({});

Basic.args = {
  children: 'Hello Worls',
  classNames: 'bg-green-300',
};
