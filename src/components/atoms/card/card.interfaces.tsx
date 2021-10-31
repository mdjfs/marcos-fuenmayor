import { ReactNode } from "react";

export interface CardProps {
  isDark?: Boolean;
  dimension?: "small" | "medium" | "large";
  content: string | ReactNode;
}
