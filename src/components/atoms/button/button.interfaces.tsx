import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isPrimary?: Boolean;
  isDark?: Boolean;
  dimension?: "small" | "medium" | "large";
  content?: string | ReactNode;
}
