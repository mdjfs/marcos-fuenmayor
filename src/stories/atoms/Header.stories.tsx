import { Story, Meta } from "@storybook/react";
import Header from "../../components/atoms/header/header";
import { HeaderProps } from "../../components/atoms/header/header.interfaces";

export default {
  title: "Atoms/Header",
  component: Header,
  argTypes: {
    dimension: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story<HeaderProps> = (args: HeaderProps) => (
  <Header {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isDark: false,
  dimension: "medium",
  content: "Esto es un header",
};
