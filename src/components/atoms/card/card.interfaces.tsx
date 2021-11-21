import { ReactNode, HTMLProps } from "react";
import { ThemedComponent } from "../../../common/interfaces/theme.interfaces";

export interface CardProps extends ThemedComponent, HTMLProps<HTMLDivElement> {}
