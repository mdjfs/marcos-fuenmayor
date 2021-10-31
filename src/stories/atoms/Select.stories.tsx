import { Story, Meta } from "@storybook/react";
import Select from "../../components/atoms/select/select";
import { SelectProps } from "../../components/atoms/select/select.interfaces";

export default {
  title: "Atoms/Select",
  component: Select,
  argTypes: {
    dimension: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story<SelectProps> = (args: SelectProps) => (
  <Select {...args} />
);

export const Default = Template.bind({});
Default.args = {
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
