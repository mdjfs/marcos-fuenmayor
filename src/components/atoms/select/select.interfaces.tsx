import { ReactNode } from "react";

export type Choice = [string, string | ReactNode];

export interface SelectProps {
  dimension?: "small" | "medium" | "large";
  isPrimary?: boolean;
  isDark?: boolean;
  choices?: Choice[];
  onSelectChoice?: (choice: Choice | null) => void;
}
