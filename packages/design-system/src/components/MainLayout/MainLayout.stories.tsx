import { MainLayout } from './MainLayout';

export default {
  title: 'ui/Layout/MainLayout',
  component: MainLayout,
};

const Template = (args: any) => <MainLayout {...args} />;

export const Basic: any = Template.bind({});

Basic.args = {
  bgColor: 'bg-primary',
  headerMainText: 'Header Main Text',
  headerSubText: 'Sub Header Text',
  body: <div>This is The Body</div>,
};
