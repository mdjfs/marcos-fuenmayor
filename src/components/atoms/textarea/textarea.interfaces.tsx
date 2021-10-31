import { TextareaHTMLAttributes } from "react";
import { BiThemedComponent } from "../../../common/interfaces/theme.interfaces";

export type OverrideTextArea = BiThemedComponent &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export interface TextAreaProps extends OverrideTextArea {
  onType?: (value: string, matched?: boolean) => void;
  matchRegex?: RegExp;
}
