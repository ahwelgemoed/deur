import { Card } from './Card';

export default {
  title: 'ui/Card',
  component: Card,
};

const Template = (args: any) => <Card {...args} />;

export const Basic: any = Template.bind({});

Basic.args = {
  title: `CRE ATE`,
  classNames: 'bg-[#FFBD12]',
};
export const DayPass: any = Template.bind({});

DayPass.args = {
  title: 'DAY PASS',
  classNames: 'bg-[#F95A2C]',
};
