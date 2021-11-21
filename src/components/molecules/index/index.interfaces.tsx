import { HTMLAttributes, ReactNode } from "react";
import { CardProps } from "../../atoms/card/card.interfaces";

export interface IndexType extends HTMLAttributes<HTMLButtonElement> {
  content: ReactNode;
  children?: IndexType[];
  defaultOpen?: boolean;
}

export interface IndexProps extends CardProps {
  navigation: IndexType[];
}
