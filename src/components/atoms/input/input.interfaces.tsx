import { HTMLAttributes } from "react";
import { BiThemedComponent } from "../../../common/interfaces/theme.interfaces";

export interface InputProps
  extends BiThemedComponent,
    HTMLAttributes<HTMLInputElement> {
  onType?: (value: string, matched?: boolean) => void;
  matchRegex?: RegExp;
}
