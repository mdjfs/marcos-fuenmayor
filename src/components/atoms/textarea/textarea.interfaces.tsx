import { HTMLAttributes } from "react";
import { BiThemedComponent } from "../../../common/interfaces/theme.interfaces";

export interface TextAreaProps
  extends HTMLAttributes<HTMLTextAreaElement>,
    BiThemedComponent {
  onType?: (value: string, matched?: boolean) => void;
  matchRegex?: RegExp;
}
