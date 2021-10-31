import { InputHTMLAttributes } from "react";
import { BiThemedComponent } from "../../../common/interfaces/theme.interfaces";

export type OverrideInput = BiThemedComponent &
  InputHTMLAttributes<HTMLInputElement>;

export interface InputProps extends OverrideInput {
  onType?: (value: string, matched?: boolean) => void;
  matchRegex?: RegExp;
}
