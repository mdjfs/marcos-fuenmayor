import { Story, Meta } from "@storybook/react";
import ALink from "../../components/atoms/alink/alink";
import { ALinkProps } from "../../components/atoms/alink/alink.interfaces";

export default {
  title: "Atoms/Alink",
  component: ALink,
  argTypes: {
    dimension: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story<ALinkProps> = (args: ALinkProps) => <ALink {...args} />;

export const Default = Template.bind({});
Default.args = {
  isPrimary: true,
  isDark: false,
  dimension: "medium",
  content: "Esto es un link",
};
