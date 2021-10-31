import { Story, Meta } from "@storybook/react";
import TextArea from "../../components/atoms/textarea/textarea";
import { TextAreaProps } from "../../components/atoms/textarea/textarea.interfaces";

export default {
  title: "Atoms/TextArea",
  component: TextArea,
  argTypes: {
    dimension: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story<TextAreaProps> = (args: TextAreaProps) => (
  <TextArea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isPrimary: true,
  isDark: false,
  dimension: "medium",
  placeholder: "Esto es un textarea",
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
