import { ReactNode } from "react";
import { ThemedComponent } from "../../../common/interfaces/theme.interfaces";

export type Choice = [string, string | ReactNode];

export interface RadioProps extends ThemedComponent {
  choices?: Choice[];
  isMultiple?: boolean;
  onSelectChoice?: (choice: Choice | Choice[]) => void;
}
