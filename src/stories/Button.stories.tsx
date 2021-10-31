import Button from "../components/atoms/button/button";
import { ButtonProps } from "../components/atoms/button/button.interfaces";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    dimension: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isPrimary: true,
  isDark: false,
  dimension: "medium",
  content: "Esto es un boton",
};
