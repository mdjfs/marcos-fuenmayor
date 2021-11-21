import { HTMLAttributes } from "react";
import { LinkProps } from "react-router-dom";
import { BiThemedComponent } from "../../../common/interfaces/theme.interfaces";

export interface ALinkProps extends BiThemedComponent, LinkProps {}
