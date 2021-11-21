import { HTMLAttributes, ReactNode } from "react";
import { ThemedComponent } from "../../../common/interfaces/theme.interfaces";

export interface TextProps
  extends ThemedComponent,
    HTMLAttributes<HTMLParagraphElement> {}
