import { HTMLAttributes, ReactNode } from "react";
import { ThemedComponent } from "../../../common/interfaces/theme.interfaces";

export interface HeaderProps
  extends ThemedComponent,
    HTMLAttributes<HTMLHeadElement> {}
