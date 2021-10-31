import { ReactNode } from "react";
import { BiThemedComponent } from "../../../common/interfaces/theme.interfaces";

export type Choice = [string, string | ReactNode];

export interface SelectProps extends BiThemedComponent {
  choices?: Choice[];
  onSelectChoice?: (choice: Choice | null) => void;
}
