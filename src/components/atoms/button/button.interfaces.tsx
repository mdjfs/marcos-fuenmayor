import { ButtonHTMLAttributes, ReactNode } from "react";
import { BiThemedComponent } from "../../../common/interfaces/theme.interfaces";

export type OverrideButton = BiThemedComponent &
  ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends OverrideButton {
  content?: string | ReactNode;
}
