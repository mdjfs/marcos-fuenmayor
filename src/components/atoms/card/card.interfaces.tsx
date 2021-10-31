import { ReactNode } from "react";
import { ThemedComponent } from "../../../common/interfaces/theme.interfaces";

export interface CardProps extends ThemedComponent {
  content?: string | ReactNode;
}
