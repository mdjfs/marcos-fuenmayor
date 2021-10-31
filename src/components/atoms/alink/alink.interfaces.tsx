import { AnchorHTMLAttributes, ReactNode } from "react";

export interface ALinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isPrimary?: Boolean;
  isDark?: Boolean;
  dimension?: "small" | "medium" | "large";
  content?: string | ReactNode;
}
