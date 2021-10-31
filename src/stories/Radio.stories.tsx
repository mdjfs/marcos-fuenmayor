import { Story, Meta } from "@storybook/react";
import Radio from "../components/atoms/radio/radio";
import { RadioProps } from "../components/atoms/radio/radio.interfaces";

export default {
  title: "Atoms/Radio",
  component: Radio,
  argTypes: {
    dimension: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story<RadioProps> = (args: RadioProps) => <Radio {...args} />;

export const Single = Template.bind({});
Single.args = {
  isPrimary: true,
  isDark: false,
  dimension: "medium",
  choices: [
    ["sol", "Maracaibo"],
    ["playa", "Margarita"],
    ["nieve", "Merida"],
  ],
  onSelectChoice: console.log,
};

export const Multiple = Template.bind({});
Multiple.args = {
  isPrimary: true,
  isDark: false,
  dimension: "medium",
  choices: [
    ["sol", "Maracaibo"],
    ["playa", "Margarita"],
    ["nieve", "Merida"],
  ],
  onSelectChoice: console.log,
  isMultiple: true,
};
