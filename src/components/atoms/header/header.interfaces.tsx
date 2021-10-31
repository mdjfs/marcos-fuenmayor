import { ReactNode } from "react";

export interface HeaderProps {
  isDark?: Boolean;
  dimension?: "small" | "medium" | "large";
  content: string | ReactNode;
}
