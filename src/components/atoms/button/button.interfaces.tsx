import { HTMLAttributes } from "react";
import { BiThemedComponent } from "../../../common/interfaces/theme.interfaces";

export interface ButtonProps
  extends BiThemedComponent,
    HTMLAttributes<HTMLButtonElement> {}
