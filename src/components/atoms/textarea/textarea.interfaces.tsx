import { TextareaHTMLAttributes } from "react";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  dimension?: "small" | "medium" | "large";
  isPrimary?: boolean;
  isDark?: boolean;
  onType?: (value: string, matched?: boolean) => void;
  matchRegex?: RegExp;
}
