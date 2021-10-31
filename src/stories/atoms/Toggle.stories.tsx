import { Story, Meta } from "@storybook/react";
import Toggle from "../../components/atoms/toggle/toggle";
import { ToggleProps } from "../../components/atoms/toggle/toggle.interfaces";

export default {
  title: "Atoms/Toggle",
  component: Toggle,
  argTypes: {
    dimension: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story<ToggleProps> = (args: ToggleProps) => (
  <Toggle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isPrimary: true,
  isDark: false,
  dimension: "medium",
  left: "on",
  right: "off",
  onToggle: console.log,
};
