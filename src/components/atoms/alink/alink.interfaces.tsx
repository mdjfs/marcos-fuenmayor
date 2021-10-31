import { AnchorHTMLAttributes, ReactNode } from "react";
import { BiThemedComponent } from "../../../common/interfaces/theme.interfaces";

export type OverrideLink = AnchorHTMLAttributes<HTMLAnchorElement> &
  BiThemedComponent;

export interface ALinkProps extends OverrideLink {
  content?: string | ReactNode;
}
