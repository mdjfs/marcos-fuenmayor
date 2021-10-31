import { InputHTMLAttributes, ChangeEvent } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  dimension?: "small" | "medium" | "large";
  isPrimary?: boolean;
  isDark?: boolean;
  onType?: (value: string, matched?: boolean) => void;
  matchRegex?: RegExp;
}
