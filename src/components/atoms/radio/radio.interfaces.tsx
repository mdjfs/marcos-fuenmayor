import { ReactNode } from "react";

export type Choice = [string, string | ReactNode];

export interface RadioProps {
  dimension?: "small" | "medium" | "large";
  isPrimary?: boolean;
  isDark?: boolean;
  choices?: Choice[];
  isMultiple?: boolean;
  onSelectChoice?: (choice: Choice | Choice[]) => void;
}
