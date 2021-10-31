import { Story, Meta } from "@storybook/react";
import Text from "../../components/atoms/text/text";
import { TextProps } from "../../components/atoms/text/text.interfaces";

export default {
  title: "Atoms/Text",
  component: Text,
  argTypes: {
    dimension: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story<TextProps> = (args: TextProps) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  isDark: false,
  dimension: "medium",
  content: "Esto es un texto",
};
