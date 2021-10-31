import { Story, Meta } from "@storybook/react";
import Card from "../../components/atoms/card/card";
import { CardProps } from "../../components/atoms/card/card.interfaces";

export default {
  title: "Atoms/Card",
  component: Card,
  argTypes: {
    dimension: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story<CardProps> = (args: CardProps) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  isDark: false,
  dimension: "medium",
  content: "Esto es una carta",
};
