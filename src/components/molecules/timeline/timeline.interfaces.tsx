import { ReactNode } from "react";
import { ThemedComponent } from "../../../common/interfaces/theme.interfaces";

export interface Line {
  icon: ReactNode;
  content: ReactNode;
}

export interface TimeLineProps extends ThemedComponent {
  lines: Line[];
}
