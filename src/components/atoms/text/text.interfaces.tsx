import { ReactNode } from "react";

export interface TextProps {
  isDark?: Boolean;
  dimension?: "small" | "medium" | "large";
  content: string | ReactNode;
}
