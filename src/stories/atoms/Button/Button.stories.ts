import { ButtonProps, createButton } from './Button';
import { Story, Meta } from '@storybook/html';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Button',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger', 'success'],
    },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
}as Meta;

const Template: Story<ButtonProps> = (props) => createButton(props);

export const Primary = Template.bind({});
Primary.args  = {
  type: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Button',
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  label: 'Button',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  label: 'Button',
};
