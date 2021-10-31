import { ReactNode } from "react";
import { ThemedComponent } from "../../../common/interfaces/theme.interfaces";

export interface HeaderProps extends ThemedComponent {
  content: string | ReactNode;
}
