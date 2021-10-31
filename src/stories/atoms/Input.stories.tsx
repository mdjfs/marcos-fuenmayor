import { Story, Meta } from "@storybook/react";
import Input from "../../components/atoms/input/input";
import { InputProps } from "../../components/atoms/input/input.interfaces";

export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    dimension: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story<InputProps> = (args: InputProps) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  isPrimary: true,
  isDark: false,
  dimension: "medium",
  placeholder: "Esto es un input",
  onType: console.log,
};

export const soloestacadenapasa = Template.bind({});
soloestacadenapasa.args = {
  isPrimary: true,
  isDark: false,
  dimension: "medium",
  onType: console.log,
  matchRegex: /^soloestacadenapasa$/g,
  placeholder: "Escribe 'soloestacadenapasa' para que no se ponga en rojo",
};
